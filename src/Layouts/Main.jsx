import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = ({ news }) => {

    return (
        <div className="mb-7">
            <div className="border rounded-lg shadow-md p-4 bg-white">
                <div className="flex items-center mb-4">
                    <img 
                        
                        src={news.author.img}
                        alt={news.author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h3 className="font-semibold">{news.author.name}</h3>
                        <p className="text-sm text-gray-500">{news.author.published_date}</p>
                    </div>
                    <div className="ml-auto">
                        <FaShareAlt className="text-gray-500" />
                    </div>
                </div>
                <h2 className="text-lg font-bold mb-2">{news.title}</h2>
                <div>
                <img
                    src={news.image_url}
                    alt="News thumbnail"
                    className="w-full  rounded-lg mb-4"
                />
                </div>
                <p className="text-gray-700 mb-4">{news.details.substring(0, 150)}... <span className="text-blue-600 font-semibold cursor-pointer"><Link to={`/news/${news._id}`}>Read More</Link></span></p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FaStar className="text-yellow-500" />
                        <span className="ml-1 font-semibold">{news.rating.number}</span>
                    </div>
                    <span className="text-gray-500">{news.total_view} <FaEye className="inline-block ml-1" /></span>
                </div>
            </div>
        </div>
    );
};

export default Main;