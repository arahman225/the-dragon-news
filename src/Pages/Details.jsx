import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Details = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h2>Dtails</h2>
            <img src={news.image_url} alt="" />
        </div>
    );
};

export default Details;