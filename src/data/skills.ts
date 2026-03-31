export interface SkillCategory {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Dasturlash tillar',
    skills: ['TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3 / Sass', 'Python', 'SQL'],
  },
  {
    label: 'Freymvorklar & Kutubxonalar',
    skills: ['React', 'Next.js', 'Framer Motion', 'React Query', 'Zustand', 'Redux Toolkit'],
  },
  {
    label: 'Style & UI Kitlar',
    skills: ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Radix UI', 'Headless UI', 'Shadcn UI'],
  },
  {
    label: 'Ishlab Chiqarish & DevOps',
    skills: ['Vite', 'Webpack', 'ESLint / Prettier', 'Docker', 'Vercel'],
  },
  {
    label: 'Backend & APIlar',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    label: 'Dizayn & Ish uslubi',
    skills: ['Figma', 'Git','GitHub', 'Notion'],
  },
]
