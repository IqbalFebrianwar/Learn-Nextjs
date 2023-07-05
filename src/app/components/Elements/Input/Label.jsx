const Label =(props)=>{
    const {htmlfor, children} = props;

    return(
        <label 
            htmlFor= {htmlfor} 
            className="block mb-1 text-sm font-bold text-black">
              {children}
        </label>
    )
}

export default Label