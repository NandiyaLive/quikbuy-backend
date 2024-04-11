import { z } from "zod";

const categorySchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
});

export const categoryValidations = {
  categorySchema,
};
