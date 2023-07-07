import InputForm from "../Elements/Input"
import Link from "next/link"
import Button from "../Elements/Button"

const FormRegister =()=> {
    return (
        <form action="">
                <div className="mb-5">
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
            </div>
        </form>
    )
}

export default FormRegister