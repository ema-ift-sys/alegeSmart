import { useMutation } from "@tanstack/react-query";

const mutationFn = (data) => {
    return fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => {
        if (!res.ok) throw new Error("Eroare la trimiterea e-mailului");
        return res.json();
    })
}

export const useForgotPassword = () => {
    return useMutation({
        mutationFn: mutationFn,
        mutationKey: ['forgot-password'],
    })
}