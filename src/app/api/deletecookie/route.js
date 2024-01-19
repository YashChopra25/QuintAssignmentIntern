import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
export async function GET({req}) {
    try {
        const cookieStore = cookies()
        console.log(cookieStore.get("token"));
        // cookieStore.delete('token')
        console.log(req)
       return  NextResponse.json({messsage:"success",status:"200"})
    } catch (error) {
        
      return   NextResponse.json({messsage:"failed to delete cookie",status:"404"})
    }
}
