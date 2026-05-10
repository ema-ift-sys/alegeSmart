import * as jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function POST(request) {
    try {
        const user = await request.json();
        const cookieStore = await cookies();

        const userEmail = user.email || "test@mail.com";
        const userRoles = userEmail === 'roxanaiftimieema@gmail.com' 
            ? ["admin", "users"] 
            : ["users"];

        const token = jwt.sign(
            {
                sub: 1,
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + (60 * 60), 
                roles: userRoles, 
                username: "test_user",
                email: userEmail,
                name: userRoles.includes("admin") ? "Administrator Roxana" : "Utilizator Test"
            },
            'cheiedesemnaturablablabal' 
        );

        cookieStore.set("access_token", token);
        
        return new Response(JSON.stringify({ access_token: token }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Eroare server" }), { status: 500 });
    }
}