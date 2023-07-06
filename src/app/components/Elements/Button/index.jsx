const Button =(props)=>{
    const {children} = props;

    return (
        <button 
            className="w-full h-10 text-sm font-semibold text-white bg-black rounded-md"
        >
            {children}
        </button>
    )
}

export default Button