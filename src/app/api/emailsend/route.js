import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'abdiel11@ethereal.email',
        pass: 'VRa4sk8EB1Jm1715Mv'
    }
});
export async function POST(request) {
    try {

       const email=await request.json()
       console.log(email)
        const info = await transporter.sendMail({
            from: '"yash chopra " <yash@gmail.com>', // sender address
            to: email, 
            subject: "verification from Quint Technology Assignments", 
            text: "this is verification email from Quint Technology Assignments,Thankyou for registering", 
        
        });
        console.log("Message sent: %s", info.messageId);
        return NextResponse.json({ "message": info.messageId, success: true })
    } catch (error) {
        return NextResponse.json({ "message": "mail did'nt send", success: false })
        
    }
}