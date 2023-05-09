
function HeroSection() {
return(
    <div className="w-[100%] p-[5%]">

        <div className="w-[40%] h-fit border-2 border-solid border-red-400 rounded-3xl relative left-[1%]">
            <div className="w-[100%] h-[100%] border-2 border-solid border-red-400 rounded-3xl absolute right-[15px] bottom-[10px] z-[-30]"></div>
        <img className="object-fill w-full h-full rounded-3xl z-20" src="https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png" alt="image host"/>
        </div>

        <div className="w-[40%] h-fit border-2 border-solid border-red-400 rounded-3xl relative left-[32%] bottom-[30px]">
            <div className="w-[100%] h-[100%] border-2 border-solid border-red-400 rounded-3xl absolute right-[15px] bottom-[10px] z-[-30]"></div>
        <img className="object-fill w-full h-full rounded-3xl z-20" src="https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png" alt="image host"/>
        </div>

        <div className="w-[40%] h-fit border-2 border-solid border-red-400 rounded-3xl relative left-[61.5%] bottom-[60px]">
            <div className="w-[100%] h-[100%] border-2 border-solid border-red-400 rounded-3xl absolute right-[15px] bottom-[10px] z-[-30]"></div>
        <img className="object-fill w-full h-full rounded-3xl z-20" src="https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png" alt="image host"/>
        </div>

    <div className="w-[100%] h-fit flex justify-center">
    <h1 className=" w-fit font-custom2 text-[3rem] font-bold text-center">Scouted products and items for you</h1>
    </div>
    </div>
);
}

export default HeroSection;