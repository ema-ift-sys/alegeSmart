import { useMutation } from "@tanstack/react-query";

const mutationFn = (data) => {
    return fetch('http://localhost:3000/api/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export const useSignIn = () => {
    return useMutation({
        mutationFn: mutationFn,
        mutationKey: ['sign-in'],
    })
}