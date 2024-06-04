import axios from "@/lib/axios"
import { EmailMessageSchema } from "@/schema/Index"
import * as z from "zod"

export const SendEmailAction = async (values: z.infer<typeof EmailMessageSchema>) => {
    const validValues = EmailMessageSchema.safeParse(values)

    if(!validValues.success){
        const {message} = validValues.error.errors[0]
        return {
            success: false,
            message: message,
        }
    }
    const {data} = validValues
    const response = await axios.post("/api/send-email", data).then(res => {
        return res
    }).catch( err => {
        return err.response
    })

    if (response?.status !== 500) {
        if (response.status !== 200 && response.status !== 201) {
            return {
                success: false,
                message: response.data.message,
            };
        }

        return {
            success: true,
            message: response.data.message,
        };
    }

    return {
        success: false,
        message: "Eurreur de système."
    }
}