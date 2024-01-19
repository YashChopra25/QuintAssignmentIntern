import { NextResponse } from "next/server"

export  function GET(request,response){
    try {
        console.log(request)
        return NextResponse.json({"message":"received"})
    } catch (error) {
        console.error(error);
        return NextResponse.json({"message":error})
    }
}