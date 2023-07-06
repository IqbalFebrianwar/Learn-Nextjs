import InputForm from "../components/Elements/Input"
import Link from "next/link"
import React from "react"
import Button from "../components/Elements/Button"

const FormLogin =()=>{
    return(
        <main className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-xs">
                <h1 
                className="mb-2 text-xl font-bold text-black">Sign In</h1>
                <p 
                className="text-sm font-medium text-black">
                Welcome, Please enter your detail.
                </p>
                <form action="">
                <div className="mb-20">
                    <InputForm 
                    label="Email" 
                    type="email" 
                    name="email" 
                    placeholder="email@example.com"
                    />
                    <InputForm 
                    label="Password" 
                    type="password" 
                    name="password" 
                    placeholder="******"
                    />
                    <Link href=""><Button>Sign In</Button></Link>
                    <div className="mt-5 text-center">
                    <p className="text-sm text-gray-700">Dont have an account?
                    <Link href="./FormRegister" className="text-sm font-bold text-black">Sign Up</Link>
                    </p>
                    </div>
                </div>
                </form>
            </div>
        </main>
    )
}

export default FormLogin