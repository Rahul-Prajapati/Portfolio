const Introduction = () => {
    return (
        <div className="bg-primary h-[80vh] flex flex-col items-start justify-center gap-8">
            <h1 className="text-white font-semibold">Hi, I am</h1>
            <h1 className="text-secondary text-7xl font-semibold">Rahul Prajapati</h1>
            <h1 className="text-white font-semibold">Mern Stack Developer</h1>
            <p className="text-white w-3/5">
                Experienced React Frontend Developer with a focus on creating engaging user interfaces and building responsive, dynamic, & optimized websites following industry best practices. Proficient in Tailwind CSS, JavaScript, React JS, Redux & in Testing.
            </p>
            <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded-lg" >
                Get Started
            </button>
        </div>
    )
}

export default Introduction;