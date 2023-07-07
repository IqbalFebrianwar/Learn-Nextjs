const ProductCard =(props)=> {
    const {children} = props;
    return (
            <div className="w-full max-w-xs mx-3 my-10 bg-white border rounded-lg shadow">
                {children}
            </div>
    );
};

const MainCard =(props)=> {
    const {children} = props;
    return (
        <div class="p-5">
            {children}
        </div>
    );
};

const ImageCard =(props)=> {
    const {image} = props;
    return (
        <img class="rounded-t-lg py-5 px-5" src={image} alt="" />
    );
};

const ChildrenCard =(props)=> {
    const {title, children} = props;
    return (
        <>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">{title}</h5>
            <p class="mb-3 font-normal text-black">{children}</p>
        </>
    );
};

const ButtonCard =(props)=> {
    const {children} = props;
    return (
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {children}
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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