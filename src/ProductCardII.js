function ProductCard(){
    const products = [
        {
            name: "ZOROSY Wave Table Makeup Mirrors for Women - Desk Cosmetic...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BBR57PPT&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/ZOROSY-Table-Makeup-Mirrors-Women/dp/B0BBR57PPT?keywords=pink+wavy+mirror&qid=1685732847&sr=8-6&linkCode=li3&tag=iwantthatblog-20&linkId=7fcfd805b5ff01f90f787a06f2a59969&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "Cafini 50PCS Light Pink Aesthetic Picture for Wall Collage...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08TT6DNB1&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Cafini-Aesthetic-Picture-Collage-Hermosa/dp/B08TT6DNB1?pd_rd_w=4Q7Yi&content-id=amzn1.sym.66cd5993-4858-4aae-8763-ef211afd02bf&pf_rd_p=66cd5993-4858-4aae-8763-ef211afd02bf&pf_rd_r=N0BDYNKKCDVAF2FCY8XZ&pd_rd_wg=3w0fY&pd_rd_r=07003dc2-0584-40ac-99f1-c9fab335ead5&pd_rd_i=B08TT6DNB1&psc=1&linkCode=li3&tag=iwantthatblog-20&linkId=d8a72a119c6aff8a62c9947869eed90a&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "6-Tier Bamboo Tree Modern Bookshelf, Creative Curved Standing Bookcase...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BBZ3GM9H&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            product_link: "https://www.amazon.com/Bookshelf-Creative-Standing-Bookcase-Organizer/dp/B0BBZ3GM9H?crid=251R867N4DVYQ&keywords=scandinavian+furniture&qid=1685742503&sprefix=scandinavian+%2Caps%2C908&sr=8-28&linkCode=li3&tag=iwantthatblog-20&linkId=373b78a04f8cba69e7d4a8c03ff9ade5&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "Design Toscano Nights Fury Dragon Gothic Decor Hanging Light Fixture...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B002YFNT3O&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Design-Toscano-CL1868-Hanging-Greystone/dp/B002YFNT3O?keywords=Gothic%2BChandelier&qid=1685725462&sr=8-16&th=1&linkCode=li3&tag=iwantthatblog-20&linkId=2ff3dc8a4270f3ebd5af725300dfafd8&language=en_US&ref_=as_li_ss_il"
        }
    ]

    

    return(
        <div className="w-[100%] flex flex-wrap justify-evenly m-0">

                {
        products.map((item)=>{
            return(
            <div className="w-[145px] m-[3px] mb-[15px] md:w-[250px] lg:w-[330px] xl:w-[400px] h-fit rounded-t border border-solid border-red-200 p-[0.7rem]">
                <img className="w-[100%] h-[100%]" src={item.image_link} alt="Sample shot"/>
                <div className=" w-[90%] h-fit lg:h-[100px] border-t border-solid border-stone-300 mt-[0px] flex justify-center items-center m-auto ">
                    <h3 className="text-xs lg:text-lg text-center font-semibold my-[12px]">{item.name}</h3>
                    </div>

                    <div className="w-full h-fit ">
                        <a href={item.amazon_link} target="blank" rel="noreferrer" tabIndex="3" className="w-[100%] h-[25px] text-xs font-custom1 bg-green-400 focus:bg-green-600 flex justify-center items-center rounded">Amazon Link 
                        </a>
                        <a href={item.aliexpress_link} target="blank" rel="noreferrer" tabIndex="3" className="w-[100%] h-[25px] text-xs font-custom1 bg-green-400 focus:bg-green-600 flex justify-center items-center rounded mt-[3px]">Aliexpress Link
                        </a>
                    </div>
                    
                </div>
                    )
                        }
                            )
                                 }
        </div>
    )
}

export default ProductCard;