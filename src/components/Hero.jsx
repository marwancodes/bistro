import video from "../assets/hero.mp4";
import logo from "../assets/bistro-logo.png";
import hero from "../assets/hero.jpeg";



const Hero = () => {

 
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <video src={video} className="h-full w-full object-cover" muted autoPlay loop playsInline poster={hero}>

            </video>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-60% to-black"></div>

        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              src={logo}
              alt="bistro"
              className="w-[100%] p-4 mx-auto lg:w-[60%]"
            />
            <p className="text-white p-4 text-lg tracking-tighter mx-auto">Experience a world of flavors with our finest selection of Moroccan, Italian, Japanese and Indian cuisines-all in one place!</p>
        </div>

    </section>
  )
}

export default Hero