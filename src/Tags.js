import {NavLink} from 'react-router-dom';

function Tags(){
    return(
<div className="w-[100%] h-fit flex justify-center my-[30px]">
    <div className="w-[90%] h-fit flex items-center">

<div className="w-[40%] h-[100px] flex justify-center items-center">
    <div className="font-custom1 text-xl font-semibold">Categories</div>
</div>

<div className="w-[60%] h-fit flex flex-wrap flex-row content-center justify-center items-center text-white font-semibold text-sm ">
    <NavLink to="/Categories/KawaiiDanishPastelEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Kawaii</NavLink>
    <NavLink to="/Categories/BohemianMaximalistEclecticEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Bohemian</NavLink>
    <NavLink to="/Categories/ModernMinimalistScandinavianEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Modern</NavLink>
    <NavLink to="/Categories/KawaiiDanishPastelEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Danish Pastel</NavLink>
    <NavLink to="/Categories/ModernMinimalistScandinavianEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Minimalism</NavLink>
    <NavLink to="/Categories/CottagecoreGothBiophilicGrungeEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Goth</NavLink>
    <NavLink to="/Categories/ModernMinimalistScandinavianEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Scandinavian</NavLink>
    <NavLink to="/Categories/CottagecoreGothBiophilicGrungeEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Cottagecore</NavLink>
    <NavLink to="/Categories/BohemianMaximalistEclecticEtc" className="w-fit h-fit px-[5px] py-[3px] bg-stone-400 rounded-md m-[2px]">Maximalist</NavLink>
    
</div>

</div>
</div>
    );
}

export default Tags;