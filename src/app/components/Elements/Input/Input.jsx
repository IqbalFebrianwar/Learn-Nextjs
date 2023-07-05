const Input =(props)=>{
    const {type, placeholder, name} = props;

    return(
        <input 
            type={type}
            className="px-3 py-2 mb-5 text-sm text-black rounded 2-full placeholder=opacity-50"
            placeholder= {placeholder}
            name={name}
        />
    )
}

export default Input