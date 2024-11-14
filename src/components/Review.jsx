import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";


const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12" id="review">
        <h2 className="text-center text-3xl lg:text-4xl">Review</h2>
        <div className="flex flex-col">
            <p className="mb-10 text-3xl font-light leading-normal tracking-tighter mt-10 mx-4 lg:mx-40 lg:mt-20 lg:text-[2.5rem]">
                {REVIEW.content}
            </p>
            <div className="flex items-center justify-center gap-6">
                <img src={xaviour} width={80} height={80} alt={REVIEW.name} className="rounded-full border" />
                <div className="tracking-tighter">
                    <h6>{REVIEW.name}</h6>
                    <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-14 md:flex-row">
            {[customer1, customer2, customer3, customer4].map((customer, index) => (
                <img key={index} src={customer} alt="customer" className="w-[200px] h-[300px] rounded-br-3xl rounded-tl-3xl object-cover" />
            ))}
        </div>
    </section>
  )
}

export default Review