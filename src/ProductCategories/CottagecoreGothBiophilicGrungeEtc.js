function CottagecoreGothBiophilicGrungeEtc(){
    const products = [
        {
            name: "Design Toscano Nights Fury Dragon Gothic Decor Hanging Light Fixture...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B002YFNT3O&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Design-Toscano-CL1868-Hanging-Greystone/dp/B002YFNT3O?keywords=Gothic%2BChandelier&qid=1685725462&sr=8-16&th=1&linkCode=li3&tag=iwantthatblog-20&linkId=2ff3dc8a4270f3ebd5af725300dfafd8&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "The Original Gypsy Color 6 Light Black Hardwire Flush Mount Chandelier...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00TSS3L24&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Original-Gypsy-Color-Chandelier-Crystals/dp/B00TSS3L24?keywords=Gothic+Chandelier&qid=1685725462&sr=8-10&linkCode=li3&tag=iwantthatblog-20&linkId=9c3a0d5733f3c5ddc964bad88f6dbb4f&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "SUMMIT COLLECTION Pondering Fairy on Lotus Fantasy Art...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005EOANHC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Fantasy-Fairy-Michelle-Display-Decoration/dp/B005EOANHC?keywords=fairy+decor&qid=1685726732&sr=8-23&linkCode=li3&tag=iwantthatblog-20&linkId=3bc21cf0dc25eeda9151da3b76458d78&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "Artilady Window Prisms Suncatcher - Sun Catchers Crystal Ball...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B8C5M2C3&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Opal-Moon-Crystal-Suncacher-Decorations/dp/B0B8C5M2C3?keywords=suncatcher&qid=1685726747&sr=8-51&linkCode=li3&tag=iwantthatblog-20&linkId=96d33a9213989ccfec4004e33208bede&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "CY2SIDE 50PCS Grunge Aesthetic Picture, 50 Set 4x6 inch...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08T9BP3WV&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/CY2SIDE-Aesthetic-Picture-Collage-Display/dp/B08T9BP3WV?keywords=punk%2Bposters&qid=1685727496&sr=8-41&th=1&linkCode=li3&tag=iwantthatblog-20&linkId=ba680849ee91ac0a72e1e2e761f33052&language=en_US&ref_=as_li_ss_il"
        },
        
    ]

    

    return(
        <div className="w-[100%] flex flex-wrap justify-evenly m-0">

            <div className="w-[100%] h-[fit] p-[15px] my-[20px]">
                <div className="w-full h-fit flex justify-center items-center mb-[10px]">
                    <span  className="w-fit h-fit text-center sm:text-xl font-custom1 font-semibold lg:text-2xl">Cottagecore, Goth, Biophilic, Grunge Etc</span>
                </div>
                <p className="w-[100%] h-fit m-auto text-center text-">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio facilis maxime iste possimus perspiciatis modi eaque ab consequatur minus magni.</p>
            </div>

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
export default CottagecoreGothBiophilicGrungeEtc;