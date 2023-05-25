import {useRef} from "react";
import {NavLink} from 'react-router-dom';
import './index.css';
import Hamburger from './icons/Hamburger-Menu.svg';
import Categories from './icons/Categories.svg';
import About from './icons/About.svg';

function Header() {

    const sideMenu = useRef();
 
window.onscroll = ()=>{
    let x = window.scrollX;
    let y = window.scrollY;

    if(sideMenu.current.classList.contains("hidden")){
    window.scroll(x, y)
    }
else{
    window.scroll("", "")
}
    }

    const showSideMenu =()=>{
        sideMenu.current.classList.toggle("hidden")
        }

        
        const hideMobileSideMenu = ()=>{
            sideMenu.current.classList.add("hidden")
        }

    return(
        <div className="w-[100%] h-[75px] flex font-custom1 overflow-hidden border-b border-solid border-stone-300">
            <div className="w-[50%] pl-[10%] flex items-center">
                <NavLink to="/" onClick={hideMobileSideMenu} className="w-[100%] font-custom1 font-semibold">I Want That</NavLink>
            </div>

        <div className="w-[50%] h-full pr-8 md:hidden flex justify-end items-center"> 
        <div onClick={showSideMenu} tabIndex="4" className=" w-[45px] h-[45px] rounded-full focus:bg-stone-300 flex"><img className="w-[20px] m-auto" src={Hamburger} alt="Hamburger Svg" /></div>
        </div>

        <div ref={sideMenu} className="w-full h-[100%] bg-white absolute hidden top-[75px] m-0 p-0 z-[1200]">
            <div className="w-[100%] h-[70px] flex justify-start items-center ">
                <div className="m-[20px]"><img className="w-[30px] h-[30px]" width="100%" height="100%" color="red" src={Categories} alt="Categories icon"/> </div>
                <NavLink to="/categoriespage" onClick={hideMobileSideMenu}><span className="w-fit mx-3 text-xl font-semibold">Categories</span></NavLink>
            </div>

            <div className="w-[100%] h-[70px] flex justify-start items-center ">
                <div className="m-[20px]"><img className="w-[30px] h-[30px]" width="100%" height="100%" color="red" src={About} alt="Categories icon"/> </div>
                <NavLink to="/about" onClick={hideMobileSideMenu}><span className="w-fit mx-3 text-xl font-semibold">About</span></NavLink>
            </div>
             
        </div>


        <div className="w-[50%] justify-end items-center pr-[10%] hidden md:flex">
            <NavLink to="/categoriespage" className="w-fit mx-3">Categories</NavLink>
            <NavLink to="/about" className="w-fit mx-3">About</NavLink>
            </div>
        </div>

    );

}

export default Header;