import AuthLayouts from "../components/Layout/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"

const RegisterPage =()=>{
    return(
        <AuthLayouts title="Register" type="register">
            <FormRegister>
            </FormRegister>
        </AuthLayouts>
    )
}

export default RegisterPage