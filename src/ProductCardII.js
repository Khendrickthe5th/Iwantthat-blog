function ProductCard(){
    const products = [
        {
            name: "Christopher Knight Home Isaiah Indoor/Outdoor Wicker Tear Drop...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B086PCBNNF&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Christopher-Knight-Home-312592-Multi-Brown/dp/B086PCBNNF?crid=2S73FBQ2EF6H0&keywords=hammock+indoor+wooden&qid=1685785937&sprefix=hammock+indoor+wooden%2Caps%2C483&sr=8-72&linkCode=li3&tag=iwantthatblog-20&linkId=60c33da0740abb9c9309f87d664e3acd&language=en_US&ref_=as_li_ss_il",
            aliexpress_link: ""
        },
        {
            name: "TUZECH Epoxy Table Fully Customized Thick Resin River Table...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08QW41TDJ&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            product_link: "https://www.amazon.com/dp/B08QW41TDJ?th=1&linkCode=li3&tag=iwantthatblog-20&linkId=0bbeb19b959809b82750621bda2036dd&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "SUMMIT COLLECTION Pondering Fairy on Lotus Fantasy Art...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005EOANHC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Fantasy-Fairy-Michelle-Display-Decoration/dp/B005EOANHC?keywords=fairy+decor&qid=1685726732&sr=8-23&linkCode=li3&tag=iwantthatblog-20&linkId=3bc21cf0dc25eeda9151da3b76458d78&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "Lumoonosity LED Hexagon Lights - Dream Color Hexagon...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08SQ8BD6H&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Lumoonosity-LED-Hexagon-Lights-Changing/dp/B08SQ8BD6H?keywords=hexagon+lights&qid=1685745871&sr=8-26&linkCode=li3&tag=iwantthatblog-20&linkId=8bc479376e269301dff7e361f22a64bc&language=en_US&ref_=as_li_ss_il"
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