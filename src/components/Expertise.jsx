import { CUSINES } from "../constants";


const Expertise = () => {

    const aosConfig = {
        "data-aos": "fade-left",
        "data-aos-duration": "800",
        "data-aos-delay": "0"
    };

  return (
    <section id="expertise">
        <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
            Our Expertise
        </h2>
        <div className="container mx-auto px-4">
            {CUSINES.map((cusine, index) => (
                <div key={index} className="flex items-center border-b-2 border-dotted border-neutral-700/40 py-2" {...aosConfig}>
                    <div className="flex-shrink-0 pr-8 text-2xl">
                        {cusine.number}
                    </div>
                    <div className="w-1/3 flex-shrink-0">
                        <img src={cusine.image} alt={cusine.title} className="h-auto rounded-3xl" />
                    </div>
                    <div className="pl-8">
                        <h3 className="text-2xl uppercase tracking-tighter text-orange-500">
                            {cusine.title}
                        </h3>
                        <p className="mt-4 text-lg tracking-tighter">
                            {cusine.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Expertise;