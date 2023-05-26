function CottagecoreGothBiophilicGrungeEtc(){
    const products = [
        {
            name: "Jellyfish LED Light",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png",
            product_link: ""
        },
        {
            name: "Jellyfish LED Light",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png",
            product_link: ""
        },
        {
            name: "Jellyfish LED Light",
            tag: "",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, praesentium.",
            image_link: "https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png",
            product_link: ""
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
                        <a href={"https://" + item.amazon_link} target="blank" rel="noreferrer" tabIndex="3" className="w-[100%] h-[25px] text-xs font-custom1 bg-green-400 focus:bg-green-600 flex justify-center items-center rounded">Amazon Link 
                        </a>
                        <a href={"https://" + item.aliexpress_link} target="blank" rel="noreferrer" tabIndex="3" className="w-[100%] h-[25px] text-xs font-custom1 bg-green-400 focus:bg-green-600 flex justify-center items-center rounded mt-[3px]">Aliexpress Link
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