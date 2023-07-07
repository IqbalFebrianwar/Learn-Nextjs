const ProductCard =(props)=> {
    const {children} = props;
    return (
            <div className="flex flex-col justify-between w-full max-w-xs mx-3 my-10 bg-white border rounded-lg shadow">
                {children}
            </div>
    );
};

const MainCard =(props)=> {
    const {children} = props;
    return (
        <div class="p-5 mb-2">
            {children}
        </div>
    );
};

const ImageCard =(props)=> {
    const {image} = props;
    return (
        <img className="px-5 py-5 rounded-t-lg" src={image} alt="" />
    );
};

const ChildrenCard =(props)=> {
    const {title, children} = props;
    return (
        <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{title}</h5>
            <p className="mb-3 font-normal text-black">{children}</p>
        </>
    );
};

const ButtonCard =()=> {
    return (
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Beli
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    );
};

ProductCard.ImageCard = ImageCard;
ProductCard.MainCard = MainCard;
ProductCard.ChildrenCard = ChildrenCard;
ProductCard.ButtonCard = ButtonCard;

export default ProductCard