import SadFace from './icons/SadFace.svg';


function ErrorPage(){
    return(
        <div className="w-[100%] h-[90vh] flex justify-center items-center ">
            <div className="w-[90%] h-[90vh] flex flex-col items-center justify-center">
                <div className="w-[70px] lg:w-[130px] h-fit"><img width="100" height="100" src={SadFace} alt="Sad Face Emoji" /></div>
                <h3 className="text-xl lg:text-3xl font-semibold m-3">Oops, Page Not Found!</h3>
            </div>
        </div>
    )
}

export default ErrorPage;