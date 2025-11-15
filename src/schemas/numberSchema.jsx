import {z} from 'zod';

export const numberSchema = z.object({
    number: z
        .number({
            required_error: "Le nombre est requis",
            invalid_type_error: "Le nombre doit être un entier",
        })
        .int("Le nombre doit être un entier")
        .min(0, "Le nombre doit être supérieur ou égal à 0")
        .max(1000, "Le nombre doit être inférieur ou égal à 1 000"),
});