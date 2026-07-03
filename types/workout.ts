export type ExerciseId = "bench-press" | "lat-pulldown" | "dumbbell-row" | "shoulder-press" | "cable-fly" | "bicep-curl";
export type Exercise = { id: ExerciseId; name: string; part: string; muscles: string[]; reps: string; weightKg: number; workSeconds: number; restSeconds: number; heroImage: string; thumbnailImage: string; cue: string; steps: { title: string; description: string; image: string }[] };
export type WorkoutPlan = { id: string; title: string; durationMinutes: number; kcal: number; focus: string; exerciseIds: ExerciseId[] };
