import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about">
        <h2 className="mb-8 text-3xl text-center tracking-tighter lg:text-4xl">
            About Us
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full p-4 lg:w-1/2">
                <img src={about} alt="about" className="rounded-3xl lg:-rotate-3"/>
            </div>
            <div className="w-full px-2 lg:w-1/2">
                <h2 data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="0"
                    className="text-4xl tracking-tighter lg:text-6xl"
                >
                    {ABOUT.header}
                </h2>
                <div data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200" 
                    className="mb-8 mt-1 h-2 w-36 bg-orange-500 lg:-rotate-3">
                </div>

                <p data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl">
                    {ABOUT.content}
                </p>
            </div>
        </div>
    </section>
  )
}

export default About