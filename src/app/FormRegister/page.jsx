import InputForm from "../components/Elements/Input"
import Link from "next/link"
import React from "react"
import Button from "../components/Elements/Button"

const FormRegister =()=>{
    return(
        <main className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-xs">
                <h1 
                className="mb-2 text-xl font-bold text-black">Sign Up</h1>
                <p 
                className="text-sm font-medium text-black">
                Welcome, Please enter your detail.
                </p>
                <form action="">
                <div className="mb-15">
                    <InputForm 
                    label="Firstname" 
                    type="text" 
                    name="text" 
                    placeholder="First name"
                    />
                    <InputForm 
                    label="Lastname" 
                    type="text" 
                    name="text" 
                    placeholder="Last name"
                    />
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
                    <Link href=""><Button>Sign Up</Button></Link>
                    <div className="mt-5 text-center">
                    <p className="text-sm text-gray-700">Already have an account
                    <Link href="./" className="text-sm font-bold text-black">Sign In</Link>
                    </p>
                    </div>
                </div>
                </form>
            </div>
        </main>
    )
}

export default FormRegister