import { useRef, useCallback } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────
const PREFIX = "998";
const MAX_DIGITS = 12; // 998 + 9 subscriber digits

// ─── Format: digits → "+998 XX XXX XX XX" ────────────────────────────────────
function formatPhone(digits: string): string {
  if (!digits.startsWith(PREFIX)) digits = PREFIX + digits;
  digits = digits.slice(0, MAX_DIGITS);

  let out = "+";
  for (let i = 0; i < digits.length; i++) {
    if (i === 3 || i === 5 || i === 8 || i === 10) out += " ";
    out += digits[i];
  }
  return out;
}

// ─── Strip all non-digit chars ────────────────────────────────────────────────
function onlyDigits(s: string): string {
  return s.replace(/\D/g, "");
}

// ─── Map N digit-count → cursor position in formatted string ─────────────────
function cursorAfterNDigits(formatted: string, n: number): number {
  let seen = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) seen++;
    if (seen === n) return i + 1;
  }
  return formatted.length;
}

// ─── Component ────────────────────────────────────────────────────────────────
interface UzPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
}

export function UzPhoneInput({
  value,
  onChange,
  className = "",
  placeholder = "+998 90 123 45 67",
  required,
  name,
}: UzPhoneInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  // Commit new digit string + desired cursor position (in digit-space)
  const commit = useCallback(
    (digits: string, cursorDigits: number) => {
      if (!digits.startsWith(PREFIX)) digits = PREFIX;
      const formatted = formatPhone(digits);
      onChange(formatted);
      requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const pos = cursorAfterNDigits(formatted, Math.min(cursorDigits, onlyDigits(formatted).length));
        el.setSelectionRange(pos, pos);
      });
    },
    [onChange],
  );

  // ── Focus ─────────────────────────────────────────────────────────────────
  const handleFocus = useCallback(() => {
    if (!value) {
      const formatted = formatPhone(PREFIX);
      onChange(formatted);
      requestAnimationFrame(() => {
        ref.current?.setSelectionRange(formatted.length, formatted.length);
      });
    }
  }, [value, onChange]);

  // ── Blur ──────────────────────────────────────────────────────────────────
  const handleBlur = useCallback(() => {
    if (onlyDigits(value) === PREFIX) onChange("");
  }, [value, onChange]);

  // ── KeyDown: Backspace / Delete with prefix protection ────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Backspace" && e.key !== "Delete") return;
      e.preventDefault();

      const el = e.currentTarget;
      const fmt = el.value;
      const all = onlyDigits(fmt);
      const selStart = el.selectionStart ?? fmt.length;
      const selEnd = el.selectionEnd ?? fmt.length;
      const hasSelection = selStart !== selEnd;

      const dLeft = onlyDigits(fmt.slice(0, selStart)).length;
      const dRight = onlyDigits(fmt.slice(selEnd)).length;

      let nextDigits: string;
      let nextCursorDigits: number;

      if (hasSelection) {
        const keepLeft = Math.max(dLeft, PREFIX.length);
        const leftPart = all.slice(0, keepLeft);
        const rightPart = dRight > 0 ? all.slice(-dRight) : "";
        nextDigits = leftPart + rightPart;
        nextCursorDigits = keepLeft;
      } else if (e.key === "Backspace") {
        if (dLeft <= PREFIX.length) {
          // Clamp cursor to after prefix, do nothing else
          requestAnimationFrame(() => {
            const pos = cursorAfterNDigits(fmt, PREFIX.length);
            el.setSelectionRange(pos, pos);
          });
          return;
        }
        nextDigits = all.slice(0, dLeft - 1) + all.slice(dLeft);
        nextCursorDigits = dLeft - 1;
      } else {
        // Delete key
        if (dLeft < PREFIX.length) return;
        nextDigits = all.slice(0, dLeft) + all.slice(dLeft + 1);
        nextCursorDigits = dLeft;
      }

      commit(nextDigits, nextCursorDigits);
    },
    [commit],
  );

  // ── onChange: regular typing ───────────────────────────────────────────────
  // THE FIX: always derive digit string purely from the raw input value,
  // never from the previous `value` prop. This prevents the "appending to
  // old formatted value" bug that happens when the browser's internal cursor
  // state and the React controlled value fall out of sync after a delete.
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const el = e.currentTarget;
      const raw = e.target.value;
      const cursorPos = el.selectionStart ?? raw.length;

      // Extract digits purely from what the browser currently shows
      const newDigits = onlyDigits(raw);

      if (newDigits.length < PREFIX.length) {
        commit(PREFIX, PREFIX.length);
        return;
      }

      const clamped = newDigits.slice(0, MAX_DIGITS);
      // Cursor in digit-space = digits to the left of cursor in raw string
      const dCursor = Math.min(onlyDigits(raw.slice(0, cursorPos)).length, MAX_DIGITS);

      commit(clamped, dCursor);
    },
    [commit],
  );

  // ── Paste ─────────────────────────────────────────────────────────────────
  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = onlyDigits(e.clipboardData.getData("text"));
      const normalized = pasted.startsWith(PREFIX)
        ? pasted
        : PREFIX + pasted.replace(/^9{0,2}8?/, "");
      const clamped = normalized.slice(0, MAX_DIGITS);
      commit(clamped, clamped.length);
    },
    [commit],
  );

  // ── Keep cursor out of "+" zone ───────────────────────────────────────────
  const handleSelect = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    const el = e.currentTarget;
    if ((el.selectionStart ?? 0) < 1) {
      el.setSelectionRange(1, el.selectionEnd ?? 1);
    }
  }, []);

  return (
    <input
      ref={ref}
      type="tel"
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      className={className}
      inputMode="numeric"
      autoComplete="tel"
      maxLength={17}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onPaste={handlePaste}
      onSelect={handleSelect}
    />
  );
}

// ─── Validation ───────────────────────────────────────────────────────────────
export function isValidUzPhone(value: string): boolean {
  return onlyDigits(value).length === MAX_DIGITS;
}

// ─── Drop-in usage in Contact.tsx ────────────────────────────────────────────
//
// import { UzPhoneInput, isValidUzPhone } from "./UzPhoneInput";
//
// <UzPhoneInput
//   name="phone"
//   value={form.phone}
//   onChange={(val) => setForm((prev) => ({ ...prev, phone: val }))}
//   className={inputClass}
// />
//
// In handleSubmit before fetch():
// if (!isValidUzPhone(form.phone)) {
//   alert("Telefon raqamini to'liq kiriting");
//   setLoading(false);
//   return;
// }