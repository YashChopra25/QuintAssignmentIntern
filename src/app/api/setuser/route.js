import dbconnect from "@/services/dbconnect";
import { user } from "@/services/user.model"
import jwt from "jsonwebtoken";
const { NextResponse } = require("next/server");
import { cookies } from 'next/headers'

export async function POST(req) {
    try {
        await dbconnect();
        const params = await req.json()
        const setuser = await user.create(params);
        const res = await setuser.save()
        let token = jwt.sign({ id: res._id, email: res.email }, process.env.SECRET_KEY)
        const cookieStore = cookies()
        cookieStore.set("token", token)
        return NextResponse.json({ "message": res, "success": true, status: 200, token })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ "message": error, "success": false, status: 404, token: "none" })
    }
}