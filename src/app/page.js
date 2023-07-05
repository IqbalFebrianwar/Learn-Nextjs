import Button from "./components/Elements/Button"
import InputForm from "./components/Elements/Input"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-xs">
        <h1 
        className="mb-2 text-xl font-bold text-black">Login</h1>
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
            <Link href="./Beranda"><Button>Login</Button></Link>
          </div>
        </form>
      </div>
    </main>
  )
}