import Link from "next/link"
import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin =()=> {
    return(
        <form action="">
            <div className="mb-5">
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
                    <Link href="/Products"><Button>Sign In</Button></Link>
            </div>
        </form>
    )
}

export default FormLogin