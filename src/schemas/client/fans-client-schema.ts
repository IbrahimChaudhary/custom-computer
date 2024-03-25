import { z } from "zod";

export const fanFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  price: z.coerce.number(),
  size: z.coerce.number(),
  color: z.string().nullable().default(""),
  rpm: z.array(z.coerce.number()),
  airflow: z.number().nullable().default(null),
  noise_level: z.number().nullable().default(null),
  pwm: z.boolean(),
});
