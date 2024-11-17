import { useLoaderData } from "react-router-dom";
import Main from "../Layouts/Main";



const CategoriesNews = () => {

    const { data:news } = useLoaderData()
   

    return (
        <div>
            <h3 className="text-[#403F3F] font-semibold">Dragon News Home</h3>
            <div className="p-6">
                {
                    news.map(news => <Main news={news} key={news._id}></Main>)
                }
            </div>
        </div>
    );
};

export default CategoriesNews;