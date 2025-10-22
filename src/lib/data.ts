import type { ComponentType } from "react";
import { Calendar1, CircleDollarSignIcon, Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";
import type { SupabaseLink } from "./types";

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
  calculadora: CircleDollarSignIcon,
  web: Globe,
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  twitter: Twitter,
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
    clicks: 789,
    createdAt: "2023-02-20",
  },
  {
    id: "calculadora",
    title: "Calcula el Ahorro al Automatizar",
    url: "https://vantia-frontend.vercel.app/calculadora-ahorro",
    Icon: CircleDollarSignIcon,
    clicks: 123,
    createdAt: "2023-05-01",
  },
  {
    id: "web",
    title: "Home Vantia",
    url: "https://vantia-frontend.vercel.app/",
    Icon: Globe,
    clicks: 1023,
    createdAt: "2023-01-15",
  },
  {
    id: "linkedin",
    title: "Síguenos en LinkedIn",
    url: "https://www.linkedin.com/company/vantia-ia",
    Icon: Linkedin,
    clicks: 456,
    createdAt: "2023-03-10",
  },
  {
    id: "github",
    title: "Contribuye en GitHub",
    url: "https://github.com/VantiaHQ",
    Icon: Github,
    clicks: 632,
    createdAt: "2023-04-05",
  },
];

export const analyticsData = {
  totalViews: 12543,
  totalClicks: linksData.reduce((acc, link) => acc + link.clicks, 0),
  linkPerformance: linksData.map(link => ({ name: link.title, clicks: link.clicks })),
  viewsByDate: [
    { date: '2023-06-01', views: 200 },
    { date: '2023-06-02', views: 300 },
    { date: '2023-06-03', views: 250 },
    { date: '2023-06-04', views: 400 },
    { date: '2023-06-05', views: 350 },
    { date: '2023-06-06', views: 500 },
    { date: '2023-06-07', views: 450 },
  ],
};