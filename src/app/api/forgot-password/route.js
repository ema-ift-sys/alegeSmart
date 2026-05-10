export async function POST(request) {
    const data = await request.json();
    console.log("Cerere resetare parolă pentru:", data.email);

    return new Response(JSON.stringify({ message: "E-mail de resetare trimis!" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}