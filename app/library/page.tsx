import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Panel } from "@/components/ui/Panel";
import { ExerciseCard } from "@/components/workout/ExerciseCard";
import { exercises } from "@/data/exercises";
export default function LibraryPage() { return <AppShell><Header title="Exercise Library"/><div className="no-scrollbar mb-3 flex gap-2 overflow-x-auto">{["ทั้งหมด", "หน้าอก", "หลัง", "ไหล่", "แขน"].map((item, index) => <button key={item} className={`h-10 shrink-0 rounded-full border px-4 font-bold ${index === 0 ? "border-transparent bg-iron-accent text-[#071004]" : "border-white/10 bg-white/[.045] text-iron-muted"}`}>{item}</button>)}</div><Panel>{exercises.map((exercise, index) => <Link key={exercise.id} href={`/exercise/${exercise.id}`}><ExerciseCard exercise={exercise} index={index}/></Link>)}</Panel><BottomNav/></AppShell>; }
