import type { Exercise } from "@/types/workout";
const bench = "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=900&q=90";
const row = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=90";
const shoulder = "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=900&q=90";
const gym = "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=900&q=90";
function steps(image: string, cue: string) { return [{ title: "ท่าเริ่มต้น", description: "จัดท่าทางให้มั่นคง เตรียมจังหวะหายใจ และโฟกัสกล้ามเนื้อหลัก", image }, { title: "ช่วงออกแรง", description: cue, image }, { title: "กลับสู่ท่าเริ่ม", description: "ควบคุมจังหวะกลับ ไม่ปล่อยน้ำหนักตก", image }]; }
export const exercises: Exercise[] = [
  { id: "bench-press", name: "Bench Press", part: "Chest · Push Movement", muscles: ["หน้าอก", "ไหล่", "หลังแขน"], reps: "8 - 10", weightKg: 60, workSeconds: 35, restSeconds: 25, heroImage: bench, thumbnailImage: bench, cue: "ลดบาร์ลงมาระดับอก แล้วดันขึ้นแบบคุมจังหวะ", steps: steps(bench, "ลดบาร์ลงมาระดับอก แล้วดันขึ้นแบบคุมจังหวะ") },
  { id: "lat-pulldown", name: "Lat Pulldown", part: "Back · Vertical Pull", muscles: ["ปีกหลัง", "หน้าแขน", "สะบัก"], reps: "10 - 12", weightKg: 45, workSeconds: 40, restSeconds: 25, heroImage: gym, thumbnailImage: gym, cue: "ดึงศอกลงข้างลำตัว ไม่โยกตัวแรง", steps: steps(gym, "ดึงศอกลงข้างลำตัว ไม่โยกตัวแรง") },
  { id: "dumbbell-row", name: "Dumbbell Row", part: "Back · Pull Movement", muscles: ["หลังกลาง", "ปีกหลัง", "หน้าแขน"], reps: "10 - 12", weightKg: 24, workSeconds: 35, restSeconds: 20, heroImage: row, thumbnailImage: row, cue: "หลังตรง ดึงศอกไปด้านหลัง และลดดัมเบลช้า ๆ", steps: steps(row, "ดึงศอกไปด้านหลัง บีบสะบัก และลดดัมเบลช้า ๆ") },
  { id: "shoulder-press", name: "Shoulder Press", part: "Shoulder · Push Movement", muscles: ["ไหล่", "หลังแขน", "แกนกลาง"], reps: "8 - 10", weightKg: 32, workSeconds: 35, restSeconds: 20, heroImage: shoulder, thumbnailImage: shoulder, cue: "เกร็งแกนกลาง ไม่แอ่นหลังตอนดันขึ้น", steps: steps(shoulder, "ดันน้ำหนักขึ้นเหนือศีรษะโดยไม่แอ่นหลัง") },
  { id: "cable-fly", name: "Cable Fly", part: "Chest · Isolation", muscles: ["หน้าอก", "ไหล่หน้า"], reps: "12 - 15", weightKg: 30, workSeconds: 35, restSeconds: 20, heroImage: bench, thumbnailImage: bench, cue: "บีบหน้าอกเข้าหากัน คุมช่วงกลับช้า ๆ", steps: steps(bench, "บีบหน้าอกเข้าหากัน คุมช่วงกลับช้า ๆ") },
  { id: "bicep-curl", name: "Bicep Curl", part: "Arms · Isolation", muscles: ["หน้าแขน", "ปลายแขน"], reps: "10 - 12", weightKg: 18, workSeconds: 30, restSeconds: 20, heroImage: shoulder, thumbnailImage: shoulder, cue: "ล็อกศอกไว้ข้างลำตัว ไม่เหวี่ยงตัว", steps: steps(shoulder, "ล็อกศอกไว้ข้างลำตัว ไม่เหวี่ยงตัว") }
];
export function getExercise(id: string) { return exercises.find((exercise) => exercise.id === id); }
