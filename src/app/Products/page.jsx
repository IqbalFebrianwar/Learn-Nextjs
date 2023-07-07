import ProductCard from "../components/Fragments/ProductCard";

const products =[
    {
        id:1,
        title:"Nike",
        image:"https://img.freepik.com/free-photo/flat-lay-arrangement-with-running-shoes-towel_23-2148259118.jpg?w=900&t=st=1688695167~exp=1688695767~hmac=5725571f3a23b6a0b7f78e75a645db3b00bc1bdbdc8f4e7167fc92208fcbcd70",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste exercitationem molestiae modi aliquid qui, fugit, consequuntur reprehenderit ea quas placeat sunt libero dolore blanditiis quia voluptates consectetur hic? Cum?'
    
    },
    {
        id:2,
        title:"Adidas",
        image:"https://img.freepik.com/free-photo/flat-lay-arrangement-with-running-shoes-towel_23-2148259118.jpg?w=900&t=st=1688695167~exp=1688695767~hmac=5725571f3a23b6a0b7f78e75a645db3b00bc1bdbdc8f4e7167fc92208fcbcd70",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste exercitationem molestiae modi aliquid qui, fugit, consequuntur reprehenderit ea quas placeat sunt libero dolore blanditiis quia voluptates consectetur hic? Cum?'
    
    },
    {
        id:3,
        title:"Puma",
        image:"https://img.freepik.com/free-photo/flat-lay-arrangement-with-running-shoes-towel_23-2148259118.jpg?w=900&t=st=1688695167~exp=1688695767~hmac=5725571f3a23b6a0b7f78e75a645db3b00bc1bdbdc8f4e7167fc92208fcbcd70",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste exercitationem molestiae modi aliquid qui, fugit, consequuntur reprehenderit ea quas placeat sunt libero dolore blanditiis quia voluptates consectetur hic? Cum?'
    
    }
]

const ProductPage =()=> {
    return(
        <>
        <div className="md:items-center md:justify-center md:flex justify-items-center">
            {products.map ( (product)=>(
                <ProductCard>
                <ProductCard.ImageCard image={product.image} />
                <ProductCard.MainCard>
                <ProductCard.ChildrenCard title={product.title} children={product.description}/>
                <ProductCard.ButtonCard />
                </ProductCard.MainCard>
                </ProductCard>
            ))}
        </div>
        </>
    )
}

export default ProductPage