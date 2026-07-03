import { Flame, Timer, Zap } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Panel } from "@/components/ui/Panel";
import { Metric } from "@/components/ui/Metric";
import { stats } from "@/data/stats";
export default function StatsPage() { return <AppShell><Header title="Progress"/><section className="mb-3.5 grid grid-cols-3 gap-2.5"><Metric icon={Zap} value={`${stats.streakDays}`} label="Streak"/><Metric icon={Timer} value={`${stats.trainingHours}h`} label="Training"/><Metric icon={Flame} value="5.4k" label="Calories"/></section><Panel><h3 className="mb-3 font-bold">Training Load</h3><div className="flex h-[178px] items-end gap-2 rounded-[22px] border border-white/[.07] bg-black/25 p-4">{stats.trainingLoad.map((height, index) => <div key={index} className="flex-1 rounded-t-full bg-gradient-to-b from-iron-accent to-iron-accent2" style={{ height: `${height}%`, opacity: index % 4 === 0 ? 0.35 : 1 }}/>)}</div></Panel><Panel><h3 className="mb-3 font-bold">Consistency Heatmap</h3><div className="grid grid-cols-7 gap-2">{stats.heatmap.map((day, index) => <div key={index} className="aspect-square rounded-[9px]" style={{ background: day === 1 ? "#A7FF1A" : day ? "rgba(167,255,26,.45)" : "rgba(255,255,255,.08)" }}/>)}</div></Panel><BottomNav/></AppShell>; }
