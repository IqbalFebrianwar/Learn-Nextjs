import Link from "next/link";

const AuthLayouts =(props)=> {
const {children, title, type} = props;

    return(
        <main className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-xs">
                <h1 
                className="mb-2 text-xl font-bold text-black">{title}</h1>
                <p 
                className="text-sm font-medium text-black">
                Welcome, Please enter your detail.
                </p>
                {children}
                <HaveAcc type={type} />
            </div>
        </main>
    )
}

const HaveAcc =({type})=> {
    if ( type === 'login'){
        return(
            <p className="text-sm text-center text-gray-700">Dont have an account?
                <Link href="./Register" className="text-sm font-bold text-black">Sign Up</Link>
            </p>
        )
    }
    else{
        return(
            <p className="text-sm text-center text-gray-700">Already have an account?
                <Link href="./" className="text-sm font-bold text-black">Sign Ip</Link>
            </p>
        )
    }
}
export default AuthLayouts