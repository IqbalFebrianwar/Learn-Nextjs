import ProductCard from "../components/Fragments/ProductCard";

const ProductPage =()=> {
    return(
        <>
        <div className="md:items-center md:justify-center md:flex justify-items-center">
            <ProductCard>
                <ProductCard.ImageCard image="https://img.freepik.com/free-photo/flat-lay-arrangement-with-running-shoes-towel_23-2148259118.jpg?w=900&t=st=1688695167~exp=1688695767~hmac=5725571f3a23b6a0b7f78e75a645db3b00bc1bdbdc8f4e7167fc92208fcbcd70"></ProductCard.ImageCard>
                <ProductCard.MainCard>
                <ProductCard.ChildrenCard title="Nike" children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste exercitationem molestiae modi aliquid qui, fugit, consequuntur reprehenderit ea quas placeat sunt libero dolore blanditiis quia voluptates consectetur hic? Cum?"/>
                <ProductCard.ButtonCard children="Beli" />
                </ProductCard.MainCard>
            </ProductCard>

            <ProductCard>
                <ProductCard.ImageCard image="https://img.freepik.com/free-photo/close-up-legs-blue-sneakers-riding-green-skateboard-motion-active-urban-lifestyle-youth-training-hobby-activity-active-outdoor-sport-kids-child-skateboarding_158595-6161.jpg?w=900&t=st=1688698033~exp=1688698633~hmac=db78d0a83876bd92eca917a4c44867be77a73f1794e8f637ac67c2d364e86b27"></ProductCard.ImageCard>
                <ProductCard.MainCard>
                <ProductCard.ChildrenCard title="Adidas" children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste exercitationem molestiae modi aliquid qui, fugit, consequuntur reprehenderit ea quas placeat sunt libero dolore blanditiis quia voluptates consectetur hic? Cum?"/>
                <ProductCard.ButtonCard children="Beli" />
                </ProductCard.MainCard>
            </ProductCard>
        </div>
        </>
    )
}

export default ProductPage