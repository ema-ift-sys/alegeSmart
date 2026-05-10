export async function POST(request) {
    const data = await request.json();
    
    console.log("Utilizator nou înregistrat:", data);

    return new Response(JSON.stringify({ message: "Cont creat!" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}