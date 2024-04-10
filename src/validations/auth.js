import { z } from "zod";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&^()._*?]{8,30}$/;

const registrationSchema = z
  .object({
    name: z.string().min(1),
    username: z.string().min(1),
    email: z.string().email().min(1),
    password: z
      .string()
      .min(1)
      .refine((password) => PASSWORD_REGEX.test(password), {
        message:
          "password must contain at least one uppercase letter, one lowercase letter, one number and one special character and must be between 8-30 characters",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .superRefine((data) => {
    if (data.password !== data.confirmPassword) {
      return { message: "Passwords do not match" };
    }
  });

const loginSchema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const authValidations = {
  registrationSchema,
  loginSchema,
};
