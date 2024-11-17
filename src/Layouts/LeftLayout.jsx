import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftLayout = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category
            ))
    }, [])
    return (
        <div>
            <div>
                <h3>All Caterogy ({categories.length})</h3>
                <div className="flex flex-col gap-3 mt-5">
                    {
                        categories.map(category =>
                            <NavLink to={`/category/${category.category_id}`}
                                key={category.category_id} className="btn">{category.category_name}
                            </NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftLayout;