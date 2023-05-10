import {useRef} from "react";
// import ReactDOM from "react-dom/client";
import './index.css';
import Hamburger from './icons/Hamburger-Menu.svg';


function Header() {

    const selected = (e)=>{
        e.currentTarget.classList.toggle("bg-stone-300");
        showSideMenu();
    }
    const sideMenu = useRef();
 
window.onscroll = ()=>{
    let x = window.scrollX;
    let y = window.scrollY;

    if(sideMenu.current.classList.contains("hidden")){
    window.scroll(x, y)
    console.log("yeah it contains hidden")
    }
else{
    window.scroll("", "")
}
    }

    const showSideMenu =()=>{
        sideMenu.current.classList.toggle("hidden")
        }

    return(
        <div className="w-[100%] h-[75px] flex font-custom1 overflow-hidden">
            <div className="w-[50%] pl-[10%] flex items-center">
                <span className="w-[100%]">I Want That</span>
            </div>

        <div className="w-[50%] h-full pr-8 md:hidden flex justify-end items-center"> 
        <div onClick={selected} className=" w-[45px] h-[45px] rounded-full flex"><img className="w-[20px] m-auto" src={Hamburger} alt="Hamburger Svg" /></div>
        </div>

        <div ref={sideMenu} className="w-full h-[100%] bg-purple-400 absolute hidden top-[75px] m-0 p-0 z-[1200]">
            <span className="w-fit mx-3">Categories</span>
            <span className="w-fit mx-3">About</span>
            <span className="w-fit mx-3">FAQ</span>  
        </div>


        <div className="w-[50%] justify-end items-center pr-[10%] hidden md:flex">
            <span className="w-fit mx-3">Categories</span>
            <span className="w-fit mx-3">About</span>
            <span className="w-fit mx-3">FAQ</span>
            </div>
        </div>

    );

}

export default Header;