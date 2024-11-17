import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";




const Latest = () => {
    return (
        <div>
            <div className="flex gap-4 bg-base-300 p-2 rounded-md">
                <p className="bg-[#D72050] p-2 rounded-md text-base-100">Latest</p>
                <Marquee pauseOnHover={true}  className="gap-10">
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at id accusantium animi non deleniti!</Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at id accusantium animi non deleniti!</Link>
                    <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at id accusantium animi non deleniti!</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default Latest;