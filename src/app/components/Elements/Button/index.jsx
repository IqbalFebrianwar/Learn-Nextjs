const Button =(props)=>{
    const {children} = props;

    return (
        <button 
            className="h-10 px-6 text-sm font-semibold text-white bg-black rounded-md"
        >
            {children}
        </button>
    )
}

export default Button