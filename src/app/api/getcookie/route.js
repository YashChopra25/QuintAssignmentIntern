import { NextResponse } from 'next/server';

export async function GET({ req }) {
    try {
        const token = req.cookies.token;

        if (!token) {
            console.log("token"); // You might want to log this for debugging purposes
            return NextResponse.json({ message: "Token not found", status: 404 });
        }

        return NextResponse.json({ message: "Success", status: 200 });
    } catch (error) {
        return NextResponse.json({ message: null, status: 404 });
    }
}
