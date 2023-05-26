function About(){
    return (
        <div className="w-[100%] h-[90vh] flex justify-center mb-auto">
        <div className="w-[90%] h-fit justify-center md:flex">
        <div className="max-w-[500px] md:w-[500px] h-fit"><img className="w-[100%] h-[100%]" src="https://thumbs2.imgbox.com/ca/ae/1mJfB1cz_t.png" alt="Sample shot"/></div>
        <p className="w-[100%] p-2 md:h-[300px] md:flex items-center text-xs font-semibold md:text-lg text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur iu re h ic explicabo deleniti qui cupiditate nesciunt eum accusantium, quod ad quisquam soluta provident fugit eaque earum illo neque? Facilis earum commodi cumque nam magnam voluptates nihil exercitationem omnis at rerum.</p>
        </div>

        {/* <div className="w-[100%] h-[40px] bg-stone-200 flex justify-center items-center mt-[100%] b">
            <h1 className="w-fit h-fit">© 2023 I Want That. All rights reserved</h1>
        </div> */}
    </div>)
}

export default About;