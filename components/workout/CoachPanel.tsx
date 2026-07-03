import { Bot } from "lucide-react";
import { Panel } from "@/components/ui/Panel";
export function CoachPanel({ title = "AI Coach Tip", text }: { title?: string; text: string }) { return <Panel className="grid grid-cols-[48px_1fr_auto] items-center gap-3 border-iron-accent/20 bg-iron-accent/10"><div className="grid h-12 w-12 place-items-center rounded-[18px] bg-iron-accent text-[#071004]"><Bot size={23}/></div><div><strong className="block">{title}</strong><small className="text-iron-muted">{text}</small></div><span className="text-iron-accent">●</span></Panel>; }
