import { useSelector } from "react-redux";

const Introduction = () => {
    const { loading, portfolioData } = useSelector((state) => state.root);

    const { Introduction } = portfolioData;
    const { welcomeText, firstName, lastName, caption, description } = Introduction;

    return (
        <div className="bg-primary h-[80vh] flex flex-col items-start justify-center gap-8">
            <h1 className="text-white font-semibold">{welcomeText}</h1>
            <h1 className="text-secondary lg:text-7xl text-3xl font-semibold">{firstName + " " + lastName}</h1>
            <h1 className="text-white font-semibold text-2xl lg:text-4xl ">{caption}</h1>
            <p className="text-white lg:w-3/5 lg:text-xl ">
                {description}
            </p>
            <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded-lg" >
                Get Started
            </button>
        </div>
    )
}

export default Introduction;