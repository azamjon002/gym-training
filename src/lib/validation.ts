import { z } from 'zod';

export const LoginScheme = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const RegisterScheme = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message:'Password do not match',
    path: ['confirmPassword']
})