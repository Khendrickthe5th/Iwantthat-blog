function GamingRoomWorkSpacesEtc(){
    
    const products = [
        {
            name: "Lumoonosity LED Hexagon Lights - Dream Color Hexagon...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08SQ8BD6H&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Lumoonosity-LED-Hexagon-Lights-Changing/dp/B08SQ8BD6H?keywords=hexagon+lights&qid=1685745871&sr=8-26&linkCode=li3&tag=iwantthatblog-20&linkId=8bc479376e269301dff7e361f22a64bc&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "Studebaker Large Display LCD AM/FM Retro Clock Radio USB...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TW8RGGQ&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/Display-Bluetooth-Bedroom-Kitchen-Footprint/dp/B07TW8RGGQ?&linkCode=li3&tag=iwantthatblog-20&linkId=adb108fcb19910b6b37b790d5a66440c&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "mooas Flip Desk Clock (Black), Retro Vintage Design Auto Flip...",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07PYN9YZN&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/mooas-Vintage-Battery-Internal-Operated/dp/B07PYN9YZN?keywords=vintage+digital+clock&qid=1685747004&sr=8-10&linkCode=li3&tag=iwantthatblog-20&linkId=56a280694664150620519eaaa511892b&language=en_US&ref_=as_li_ss_il"
        },
        {
            name: "KAWS Figure Toy Graffiti Art Statue Collectible",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BNNC1G6W&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=iwantthatblog-20&language=en_US",
            amazon_link: "https://www.amazon.com/KAWS-Figure-Graffiti-Statue-Collectible/dp/B0BNNC1G6W?crid=10BFW92WZZDGM&keywords=kaws+figure&qid=1685748340&sprefix=KAWS%2Caps%2C975&sr=8-5&linkCode=li3&tag=iwantthatblog-20&linkId=1de70f78de5f06687c7f9d276f024c33&language=en_US&ref_=as_li_ss_il"
        },
    ]

    

    return(
        <div className="w-[100%] flex flex-wrap justify-evenly m-0">

            <div className="w-[100%] h-[fit] p-[15px] my-[20px]">
                <div className="w-full h-fit flex justify-center items-center mb-[10px]">
                    <span  className="w-fit h-fit text-center sm:text-xl font-custom1 font-semibold lg:text-2xl">Gaming Room, Workspaces Etc</span>
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
export default GamingRoomWorkSpacesEtc;