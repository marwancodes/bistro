import { BsArrowUpShort } from "react-icons/bs";


const ScrollTop = () => {

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

  return (
    <div onClick={top} className="absolute right-5 mt-[-5rem] p-[.3rem] bg-orange-500 cursor-pointer rounded-full lg:p-[.5rem] hover:bg-orange-600">
        <BsArrowUpShort className="w-8 h-8"/>
    </div>
  )
}

export default ScrollTop;