import missionImg from "../assets/mission.jpeg";
import video from "../assets/mission.mp4";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id='mission'>
        <div className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl lg:text-4xl">
                Our Mission
            </h2>
            <div className='relative flex items-center justify-center'>
                <video data-aos="zoom-in"
                    data-aos-duration="1000"
                    className='w-full rounded-3xl' autoPlay muted loop playsInline poster={missionImg}>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="absolute h-full w-full rounded-3xl bg-black/40 "></div>
                <p className="absolute max-w-lg tracking-tighter lg:text-3xl"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="500"
                >
                    {MISSION}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Mission;