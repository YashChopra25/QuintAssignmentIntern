"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import '../globals.css'
export default function RootLayout({ children }) {
  const router = useRouter();
  const [isSucces, setIsSuccess] = useState(false)
  useEffect(() => {
    (async () => {

      const { user, error } = await getUser()

      if (error) {
        router.push('/');
        return
      }
      setIsSuccess(true)
    })()
  }, [router])
  if (!isSucces) {
    return <div className='w-screen h-screen bg-white flex justify-center items-center'>
      loading
    </div>
  }
  return (
    <main>
      <header>
        {children}
      </header>
    </main>
  )
}

async function getUser() {
  try {
    const { data } = await axios.get("/api/auth");
    return {
      user: data,
      error: null
    };

  } catch (e) {

    return {
      user: null,
      error: e
    }
  }
}