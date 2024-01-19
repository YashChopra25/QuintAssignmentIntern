import { verify } from "jsonwebtoken";
import { cookies } from "next/headers"
import { NextResponse } from "next/server";
export async function GET() {
    const cookieStore = cookies();
    console.log(cookieStore)

    const token = cookieStore.get('token');

    if (!token) {
        return NextResponse.json({
            message: "UNauthorized",
        }, {
            status: 401
        })
    }

    const { value } = token

    try {


        verify(value, process.env.SECRET_KEY)

        const response = {
            user: 'Super user'
        }

        return new Response(JSON.stringify(response), {
            status: 200
        })

    } catch (e) {
        return NextResponse.json({
            message: "Something went wrong",
        }, {
            status: 401
        })


    }
}