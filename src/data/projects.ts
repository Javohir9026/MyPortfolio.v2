export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  githubAccess: "public" | "private";
  InProgress: boolean;
  live: string;
  liveAcess: boolean
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NavoiyAzot - Mes",
    image: "/NavoiyAzotMes.png",
    description:
      "React + TypeScript da yozilgan zamonaviy UI, Backend Api bilan to'liq CRUD, Custom Icon va Custom Select Inputlar bilan ishlangan qulay interfeysga ega. WebSocket orqali Malumotlar chiqarilgan.",
    tech: [
      "React",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Lucide-React",
      "CSS Variables",
      "WebSocket",
      "react-query",
    ],
    github: "",
    githubAccess: "private",
    InProgress: true,
    live: "",
    liveAcess: false,
    featured: true,
  },
  {
    id: 2,
    title: "Hr Erp - CRM system",
    image: "/HrErp.jpg",
    description:
      "React + TypeScript da yozilgan zamonaviy CRM sistema. Custom UI componentlari bilan ishlangan, Backend Api To'liq CRUD, Custom Iconlardan foydalanilgan. To'liq responsive va foydalanuvchi uchun qulay interfeysga ega CRM sistema",
    tech: [
      "React",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Lucide-React",
      "CSS Variables",
      "react-query",
      "WebSocket",
    ],
    github: "",
    githubAccess: "private",
    InProgress: false,
    live: "",
    liveAcess: false,
    featured: true,
  },
  {
    id: 3,
    title: "Nasiya Savdo - Admin Panel",
    image: "/NasiyaSavdoAdminka.png",
    description:
      "React + TypeScript da yozilgan zamonaviy admin paneli. Shadcn UIdan komponentlar, Backend Api To'liq CRUD, Lucide-react iconlardan foydalanilgan. To'liq responsive va foydalanuvchi uchun qulay interfeysga ega. Loyihani Storybook yordamida hujjatlashtirish va test qilish rejalashtirilgan.",
    tech: [
      "React",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Lucide-React",
      "CSS Variables",
    ],
    github: "https://github.com/Javohir9026/nasiya-savdo-front-end",
    githubAccess: "public",
    InProgress: false,
    live: "https://nasiya-savdo-admin-panel.vercel.app/",
    liveAcess: true,
    featured: true,
  },
  {
    id: 4,
    title: "Nasiya Savdo - landing page",
    image: "/NasiyaSavdoLanding.png",
    description:
      "React + TypeScript da yozilgan zamonaviy landing page. Shadcn UIdan komponentlar, Lucide-react iconlardan foydalanilgan. To'liq responsive va foydalanuvchi uchun qulay interfeysga ega.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Lucide-React",
      "CSS Variables",
    ],
    github: "https://github.com/Javohir9026/NasiyaLandingPage",
    githubAccess: "public",
    InProgress: false,
    live: "https://nasiya-landing-page-qrzr.vercel.app/",
    liveAcess: true,
    featured: true,
  },
  {
    id: 5,
    title: "Yasin Mebel - Enterprise ERP",
    image: "/YasinMebel.png",
    description:
      "Yasin Mebel uchun ishlab chiqilgan to'liq ERP tizimi. React + TypeScript da yozilgan, shadcn UI dan komponentlar, Lucide-react iconlardan foydalanilgan. To'liq responsive va foydalanuvchi uchun qulay interfeysga ega. Loyihani Storybook yordamida hujjatlashtirish va test qilish rejalashtirilgan.",
    tech: [
      "React",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Lucide-React",
      "State Management",
    ],
    github: "",
    githubAccess: "private",
    InProgress: true,
    live: "https://yasinmebel.uz/",
    liveAcess: true,
    featured: true,
  },
  {
    id: 6,
    title: "Pul Hisob - Business Management System",
    image: "/PulHisob.png",
    description:
      "Pul Hisob uchun ishlab chiqilgan biznes boshqaruv tizimi. React + TypeScript da yozilgan Ui Kutubxonalardan foydalanilgan. To'liq responsive va foydalanuvchi uchun qulay interfeysga ega.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "State Management",
      "Ui Libraries",
    ],
    github: "",
    githubAccess: "private",
    InProgress: false,
    live: "https://pulhisob.uz/",
    liveAcess: true,
    featured: true,
  },
];
