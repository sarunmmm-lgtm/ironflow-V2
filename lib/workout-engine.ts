import type { Exercise } from "@/types/workout";
export function calculateProgress(totalSeconds: number, secondsLeft: number) { if (totalSeconds <= 0) return 0; return Math.max(0, Math.min(100, ((totalSeconds - secondsLeft) / totalSeconds) * 100)); }
export function getCoachCue(exercise: Exercise, secondsLeft: number) { if (secondsLeft <= 5) return "ใกล้จบเซ็ตแล้ว เร่งจังหวะ!"; return exercise.cue; }
