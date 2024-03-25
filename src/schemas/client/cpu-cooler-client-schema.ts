import { z } from "zod";

export const cpuCoolerFormSchema = z.object({
  name: z.string().min(2),
  price: z.coerce.number(),
  rpm: z.coerce.number(),
  noise_level: z.coerce.number(),
  color: z.string().nullable().default(""),
  size: z.string().nullable().default(null),
});
