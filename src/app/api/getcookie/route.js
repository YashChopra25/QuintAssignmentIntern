import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
export async function GET() {
    try {
        const cookieStore = cookies()
        const token = cookieStore.get("token");
        var status = 200;
        if (!token) {
            console.log(token)
            status = 404
        }
        return NextResponse.json({ messsage: "success", status })
    } catch (error) {
        return NextResponse.json({ messsage: null, status: 404 })
    }
}