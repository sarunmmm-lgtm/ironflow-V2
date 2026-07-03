import { Brain, Flame, Heart, Timer } from "lucide-react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Panel } from "@/components/ui/Panel";
import { Metric } from "@/components/ui/Metric";
import { CoachPanel } from "@/components/workout/CoachPanel";
import { ExerciseCard } from "@/components/workout/ExerciseCard";
import { exercises } from "@/data/exercises";
import { todayPlan } from "@/data/plans";
export default function HomePage() { return <AppShell><Header/><section className="relative mb-3.5 min-h-[262px] overflow-hidden rounded-hero border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.025)),radial-gradient(circle_at_72%_18%,rgba(167,255,26,.24),transparent_22%),#0B0E0A] p-5 shadow-card"><div className="relative z-10 mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-iron-accent"><Brain size={18}/> Daily adaptive plan</div><h1 className="relative z-10 mb-3 max-w-[240px] text-[36px] font-extrabold leading-none tracking-[-1.4px]">{todayPlan.title} Session</h1><p className="relative z-10 mb-4 max-w-[225px] text-sm leading-relaxed text-[#d9e2d4]">AI ปรับโปรแกรมจากเวลา พลังงาน และเป้าหมายของคุณวันนี้</p><Link href="/train" className="relative z-10 inline-flex h-[54px] min-w-[146px] items-center justify-center gap-2 rounded-[19px] bg-gradient-to-br from-iron-accent to-iron-accent2 px-5 font-extrabold text-[#071004] shadow-glow">เริ่มฝึก</Link></section><section className="mb-3.5 grid grid-cols-3 gap-2.5"><Metric icon={Heart} value="82%" label="Recovery"/><Metric icon={Timer} value={`${todayPlan.durationMinutes}m`} label="Duration"/><Metric icon={Flame} value={`${todayPlan.kcal}`} label="Calories"/></section><CoachPanel text="วันนี้เหมาะกับ Upper Body ความหนัก 78%"/><div className="mb-2.5 mt-5 flex items-end justify-between px-1"><h2 className="text-xl font-bold">Today's Flow</h2><Link href="/ai" className="text-sm font-semibold text-iron-muted">แก้ไข</Link></div><Panel>{exercises.map((exercise, index) => <Link key={exercise.id} href={`/exercise/${exercise.id}`}><ExerciseCard exercise={exercise} index={index}/></Link>)}</Panel><BottomNav/></AppShell>; }
