import * as z from 'zod'

export const EmailMessageSchema = z.object({
    name: z.string().min(1, {
        message: "Veuillez saisir votre nom."
    }),

    email: z.string().email({
        message:"Veuillez renseigner un mail vailde"
    }),

    message: z.string().min(1, {
        message: "Veuillez saisir votre message"
    })
})