import { ZodError } from "zod";

const validateData = (validationSchema) => {
  return async (req, res, next) => {
    try {
      validationSchema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        res
          .status(400)
          .json({ error: "Validation Error", messages: errorMessages });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  };
};

export default validateData;
