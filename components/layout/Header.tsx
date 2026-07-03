"use client";
import { Bell, Pause } from "lucide-react";
import { Brand } from "@/components/layout/Brand";
export function Header({ title, soundOn, onToggleSound }: { title?: string; soundOn?: boolean; onToggleSound?: () => void }) { return <div className="mb-[18px] flex items-center justify-between">{title ? <div><div className="text-[22px] font-black tracking-[-.8px]">{title}</div><div className="text-xs font-medium text-iron-muted">IRONFLOW AI</div></div> : <Brand/>}<button onClick={onToggleSound} className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[.045] text-iron-text backdrop-blur-xl">{soundOn === false ? <Pause size={20}/> : <Bell size={20}/>}</button></div>; }
