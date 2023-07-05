import Label from "./Label";
import Input from "./Input";

const InputForm =(props)=>{
    const {label, type, name, placeholder} = props;

    return(
        <div className="mt-3 mb-5">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}></Input>
        </div>
    )
}

export default InputForm