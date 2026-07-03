"use client";
import { Brain, ChartNoAxesColumnIncreasing, Dumbbell, Home, Library } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const items = [{ href: "/", label: "Home", icon: Home }, { href: "/ai", label: "AI", icon: Brain }, { href: "/train", label: "Train", icon: Dumbbell }, { href: "/stats", label: "Stats", icon: ChartNoAxesColumnIncreasing }, { href: "/library", label: "Library", icon: Library }];
export function BottomNav() { const pathname = usePathname(); return <nav className="fixed bottom-3 left-1/2 z-50 grid h-[72px] w-[min(calc(100%-22px),410px)] -translate-x-1/2 grid-cols-5 overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0D09]/85 shadow-card backdrop-blur-2xl">{items.map((item) => { const Icon = item.icon; const active = pathname === item.href; return <Link key={item.href} href={item.href} className={`grid place-items-center gap-0.5 text-[10px] font-bold ${active ? "text-iron-accent" : "text-iron-muted"}`}><Icon size={22}/>{item.label}</Link>; })}</nav>; }
