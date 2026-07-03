import { Brain, Moon, Timer } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Panel } from "@/components/ui/Panel";
const insights = [
  { icon: Brain, title: "แรงตกช้ากว่าปกติ", subtitle: "Performance +6% จากสัปดาห์ก่อน", body: "AI แนะนำให้คงน้ำหนักเดิมอีก 1 เซ็ต แล้วเพิ่ม reps แทนการเพิ่มน้ำหนัก", width: "78%" },
  { icon: Moon, title: "Recovery ดี", subtitle: "พร้อมเล่นต่อในระดับกลาง-สูง", body: "พักอีก 20 วินาทีจะเหมาะกับเซ็ตถัดไป เพื่อรักษาฟอร์มให้คงที่", width: "82%" },
  { icon: Timer, title: "ฟอร์มโดยรวมดี", subtitle: "จังหวะขึ้น-ลงสม่ำเสมอ", body: "คุม eccentric phase ต่อเนื่องจะช่วยเพิ่มกล้ามเนื้อได้ดีขึ้น", width: "68%" }
];
export default function AIPage() { return <AppShell><Header title="AI Insight"/>{insights.map((item) => { const Icon = item.icon; return <section key={item.title} className="mb-3 rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_95%_0%,rgba(167,255,26,.12),transparent_28%),rgba(255,255,255,.052)] p-4"><div className="mb-3 grid grid-cols-[48px_1fr] items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-[17px] border border-iron-accent/20 bg-iron-accent/10 text-iron-accent"><Icon size={22}/></div><div><strong>{item.title}</strong><div className="text-xs text-iron-muted">{item.subtitle}</div></div></div><p className="leading-relaxed text-iron-muted">{item.body}</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-iron-accent" style={{ width: item.width }}/></div></section>; })}<Panel><h2 className="mb-2 text-xl font-bold">AI Program Builder</h2><p className="mb-4 text-sm text-iron-muted">ขั้นถัดไปจะเชื่อมกับโมเดล AI จริงเพื่อสร้างโปรแกรมแบบ personalize</p><button className="h-[54px] w-full rounded-[19px] bg-gradient-to-br from-iron-accent to-iron-accent2 font-extrabold text-[#071004]">สร้างโปรแกรมใหม่</button></Panel><BottomNav/></AppShell>; }
