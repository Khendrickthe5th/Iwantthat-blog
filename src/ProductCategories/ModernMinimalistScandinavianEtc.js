
function ModernMinimalistScandinavianEtc(){
    const products = [
        {
            name: "by Papella Design, Natural Walnut Veener Coffee Tables for Living...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09F6TMKK2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Natural-Designed-Furniture-Disassembled-Modular/dp/B09F6TMKK2?crid=2XJQ4H8J43TF9&keywords=luxury+chair&qid=1685741971&refinements=p_36%3A8570766011&rnid=8570763011&s=furniture&sprefix=luxury+chair%2Caps%2C969&sr=1-8&linkCode=li3&tag=iwantthatblog-20&linkId=44bf2803fb83ee44cfa5e391f3289c42&language=en_US&ref_=as_li_ss_il",
            aliexpress_link: ""
        },
        {
            name: "6-Tier Bamboo Tree Modern Bookshelf, Creative Curved Standing Bookcase...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BBZ3GM9H&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            product_link: "https://www.amazon.com/Bookshelf-Creative-Standing-Bookcase-Organizer/dp/B0BBZ3GM9H?crid=251R867N4DVYQ&keywords=scandinavian+furniture&qid=1685742503&sprefix=scandinavian+%2Caps%2C908&sr=8-28&linkCode=li3&tag=iwantthatblog-20&linkId=373b78a04f8cba69e7d4a8c03ff9ade5&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "Carrot's Den Donut Vase, Set of 2 - Minimalist Nordic Style, White...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BDR1X6PT&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Carrots-Den-Donut-Vase-Set/dp/B0BDR1X6PT?crid=251R867N4DVYQ&keywords=scandinavian+furniture&qid=1685742503&sprefix=scandinavian+%2Caps%2C908&sr=8-32&linkCode=li3&tag=iwantthatblog-20&linkId=2662b11d2e15a2dc8b241d64f4fcc08b&language=en_US&ref_=as_li_ss_il",
            aliexpress_link: ""
        },
        {
            name: "Asymmetrical Mirror for Wall Decor 23*30, Modern Brass Framed...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B2QMRLWX&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/ELEHUME-Asymmetrical-Bathroom-Bedroom-Entryway/dp/B0B2QMRLWX?crid=251R867N4DVYQ&keywords=scandinavian+furniture&qid=1685742503&sprefix=scandinavian+%2Caps%2C908&sr=8-47&linkCode=li3&tag=iwantthatblog-20&linkId=3a39cf1ed3b471722773576faf78f4f3&language=en_US&ref_=as_li_ss_il",
            aliexpress_link: ""
        },
        {
            name: "N&V Single Seated Foam Sofa, Armless Floor Sofa, One Piece...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09JC4HN8P&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/dp/B09JC4HN8P?_encoding=UTF8&psc=1&linkCode=li3&tag=iwantthatblog-20&linkId=dca21d82c50a00d9ddf71c1c0e052acd&language=en_US&ref_=as_li_ss_il",
            aliexpress_link: ""
        },
    ]

    

    return(
        <div className="w-[100%] flex flex-wrap justify-evenly m-0">

            <div className="w-[100%] h-[fit] p-[15px] my-[20px]">
                <div className="w-full h-fit flex justify-center items-center mb-[10px]">
                    <span  className="w-fit h-fit text-center sm:text-xl font-custom1 font-semibold lg:text-2xl"> Modern, Minimalist, Scandinavian Etc</span>
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
export default ModernMinimalistScandinavianEtc;