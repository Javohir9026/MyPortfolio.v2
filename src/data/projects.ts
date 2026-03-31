export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nasiya Savdo - Admin Panel",
    description:
      "React + TypeScript da yozilgan zamonaviy admin paneli. Shadcn UIdan komponentlar, Backend Api To'liq CRUD, Lucide-react iconlardan foydalanilgan. To'liq responsive va foydalanuvchi uchun qulay interfeysga ega. Loyihani Storybook yordamida hujjatlashtirish va test qilish rejalashtirilgan.",
    tech: ["React", "TypeScript", "Shadcn UI", "Tailwind CSS", "Lucide-React", "CSS Variables"],
    github: "https://github.com/Javohir9026/nasiya-savdo-front-end",
    live: "https://nasiya-savdo-admin-panel.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Nasiya Savdo – landing page",
    description:
      "React + TypeScript da yozilgan zamonaviy landing page. Shadcn UIdan komponentlar, Lucide-react iconlardan foydalanilgan. To'liq responsive va foydalanuvchi uchun qulay interfeysga ega.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lucide-React", "CSS Variables"],
    github: "https://github.com/Javohir9026/NasiyaLandingPage",
    live: "https://nasiya-landing-page-qrzr.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Hotel Luxora",
    description:
      "Hotel Luxora — zamonaviy va responsiv mehmonxona web-ilovasi. Foydalanuvchilar uchun xonalarni ko'rish, bron qilish va xizmatlar bilan tanishish imkoniyatini taqdim etadi. UI/UX, tezlik va qulaylikka alohida e’tibor qaratilgan.",
    tech: ["HTML", "CSS", "UI/UX", "Responsive Design"],
    github: "https://github.com/Javohir9026/hotel-luxora",
    live: "https://hotel-luxora-nine.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "PlayShoke – CS2 Training servers",
    description:
      "PlayShoke - CS2 o'yinini o'ynash va mashq qilish uchun mo'ljallangan trening serverlari. Foydalanuvchilar uchun qulay interfeys, tezkor javob berish va o'yin ichidagi tajribani yaxshilashga qaratilgan. Loyiha Hozircha Backendga to'liq ulanmagan va faqat frontend qismi mavjud. Keyinchalik Real Loyiha qilish rejalashtirilgan.",
    tech: ["Next.js", "TypeScript", "MockData", "CSS Modules", "Tailwind CSS"],
    github: "https://github.com/Javohir9026/PlayShoke",
    live: "https://play-shoke-git-main-amanbayevjavohir94-7008s-projects.vercel.app/",
    featured: false,
  },
];
