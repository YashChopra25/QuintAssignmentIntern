"use server"
import bcrpt from "bcrypt"
import dbconnect from "@/services/dbconnect";
import { user } from "@/services/user.model";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import jwt from "jsonwebtoken";
export async function POST(req) {
    let result;
    try {
        const cookieStore = cookies()
        let success = true;
        await dbconnect()
        const { email, password } = await req.json();

       
        result = await user.findOne({ email })
        if(!result)
        {
            result = "Please Enter valid Username or password";
            success = false;
            return NextResponse.json({ "message": result, "success": success,status:200,"token":token })
        }
        const isverify = await bcrpt.compare(password, result?.password)
        
  
        if (!isverify) {
            result = "Invalid credentail pass";
            success = false;
            return NextResponse.json({ "message": result, "success": success,status:200,"token":token })
        }
        const token = jwt.sign({ id: result._id, email: result.email }, process.env.SECRET_KEY)
   
        cookieStore.set("token", token)
        return NextResponse.json({ "message": result, "success": success,status:200,"token":token })
    } catch (error) {
        return NextResponse.json({ "message": result, "success": false ,status:404,"token":null})
    }
}
