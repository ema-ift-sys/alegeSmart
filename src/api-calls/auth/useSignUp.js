import { useMutation } from "@tanstack/react-query";

const mutationFn = (data) => {
    return fetch('http://localhost:3000/api/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => {
        if (!res.ok) throw new Error("Eroare la creare cont");
        return res.json();
    })
}

export const useSignUp = () => {
    return useMutation({
        mutationFn: mutationFn,
        mutationKey: ['sign-up'],
    })
}