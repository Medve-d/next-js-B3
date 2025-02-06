import { z } from "zod";

export const courseSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  instrument: z.string(),
  level: z.enum(["débutant", "intermédiaire", "avancé"]),
});

export const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "teacher", "student"]),
});