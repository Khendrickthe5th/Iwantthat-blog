import {NavLink} from 'react-router-dom';

function BlogMain(){
    return(
        <div className="w-[100%] h-fit flex justify-center my-[30px]">
            <div className="w-[90%] h-fit">

                <div className="w-[100%] h-fit flex gap-[5px] items-center border-t border-solid border-stone-300">
                    <div className="w-[100px] h-[100px] shrink-0">
                        <img className="w-[100%] h-[100%] " src="https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png" alt="Sample shot"/>
                    </div>
                        <NavLink to="/blog/Release001" className="w-[100%] h-fit flex flex-col items-start justify-evenly gap-[10px]">
                            <h3 className="w-fit h-fit text-[0.7rem] sm:text-[1rem] font-semibold ">Ways to Improve you bedroom aesthetics Ways to Improve you bedroom aesthetics</h3>
                            <p className="w-fit h-fit text-[0.5rem] text-stone-500 sm:text-[0.7rem] font-semibold italic">2023-4-21</p>
                    </NavLink>
                </div>

                <div className="w-[100%] h-fit flex gap-[5px] items-center border-t border-solid border-stone-300">
                    <div className="w-[100px] h-[100px] shrink-0">
                        <img className="w-[100%] h-[100%] " src="https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png" alt="Sample shot"/>
                    </div>
                        <NavLink to="/blog/Release001"  className="w-[100%] h-fit flex flex-col items-start justify-evenly gap-[10px]">
                            <h3 className="w-fit h-fit text-[0.7rem] sm:text-[1rem] font-semibold ">Ways to Improve you bedroom aesthetics Ways to Improve you bedroom aesthetics</h3>
                            <p className="w-fit h-fit text-[0.5rem] text-stone-500 sm:text-[0.7rem] font-semibold italic">2023-4-21</p>
                    </NavLink>
                </div>

                <div className="w-[100%] h-fit flex gap-[5px] items-center border-t border-solid border-stone-300">
                    <div className="w-[100px] h-[100px] shrink-0">
                        <img className="w-[100%] h-[100%] " src="https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png" alt="Sample shot"/>
                    </div>
                        <NavLink to="/blog/Release001" className="w-[100%] h-fit flex flex-col items-start justify-evenly gap-[10px]">
                            <h3 className="w-fit h-fit text-[0.7rem] sm:text-[1rem] font-semibold ">Ways to Improve you bedroom aesthetics Ways to Improve you bedroom aesthetics</h3>
                            <p className="w-fit h-fit text-[0.5rem] text-stone-500 sm:text-[0.7rem] font-semibold italic">2023-4-21</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default BlogMain;