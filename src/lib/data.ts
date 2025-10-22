import type { ComponentType } from "react";
import { Calendar1, CircleDollarSignIcon, Github, Globe, Linkedin, Mail, Twitter, ScanSearch } from "lucide-react";
import type { SupabaseLink } from "./types";
import { link } from "fs";

export type Link = {
  id: string;
  title: string;
  url: string;
  Icon: ComponentType<{ className?: string }>;
  clicks: number;
  createdAt: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
};

const iconMapping: { [key: string]: ComponentType<{ className?: string }> } = {
  consultor: Calendar1,
  analisis: ScanSearch,
  calculadora: CircleDollarSignIcon,
  web: Globe,
  linkedin: Linkedin,
};

export const getIcon = (iconName: string): ComponentType<{ className?: string }> => {
  return iconMapping[iconName] || Globe;
};

export const mapSupabaseLinkToLink = (supabaseLink: SupabaseLink): Link => {
  return {
    id: supabaseLink.id,
    title: supabaseLink.title,
    url: supabaseLink.url,
    Icon: getIcon(supabaseLink.icon),
    clicks: supabaseLink.clicks,
    createdAt: supabaseLink.created_at,
  };
};

export const profileData: Profile = {
  name: "Vantia",
  bio: "Recupera tu tiempo con IA.",
  avatarUrl: "/images/full-logo-negativo-color-vertical.png", // Default avatar URL
};

export const linksData: Link[] = [
  {
    id: "consultor",
    title: "Reserva con un Consultor",
    url: "https://calendly.com/infovantia/30min",
    Icon: Calendar1,
    clicks: 0,
    createdAt: "2025-10-21",
  },
  {
    id: "analisis",
    title: "Analiza tu Caso",
    url: "https://vantia-frontend.vercel.app/generar-agente",
    Icon: ScanSearch,
    clicks: 0,
    createdAt: "2025-10-21",
  },
  {
    id: "calculadora",
    title: "Calcula tu Ahorro",
    url: "https://vantia-frontend.vercel.app/calculadora-ahorro",
    Icon: CircleDollarSignIcon,
    clicks: 0,
    createdAt: "2025-10-21",
  },
  {
    id: "web",
    title: "Home Vantia",
    url: "https://vantia-frontend.vercel.app/",
    Icon: Globe,
    clicks: 0,
    createdAt: "2025-10-21",
  },
  {
    id: "linkedin",
    title: "Síguenos en LinkedIn",
    url: "https://www.linkedin.com/company/vantia-ia",
    Icon: Linkedin,
    clicks: 0,
    createdAt: "2025-10-21",
  },
];

export const analyticsData = {
  totalViews: 0,
  totalClicks: linksData.reduce((acc, link) => acc + link.clicks, 0),
  linkPerformance: linksData.map(link => ({ name: link.title, clicks: link.clicks })),
  viewsByDate: [
    { date: '2025-10-21', views: 0 },
    { date: '2025-10-21', views: 0 },
    { date: '2025-10-21', views: 0 },
    { date: '2025-10-21', views: 0 },
    { date: '2025-10-21', views: 0 },
  ],
};