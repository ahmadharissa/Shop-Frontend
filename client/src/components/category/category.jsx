import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Card from "../ui/card";
import Loading from "../ui/Loading";

//redux
import { getCategories } from "../../redux/category/categoryAction";

function Category() {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const categories = items?.map((item) => {
        return <Card
            key={item._id}
            id={item._id}
            name={item.name} />
    })

    return (
        <div className="container">
            <div className="row">
                {loading ? (
                    <Loading />
                ) : (
                    categories
                )}
            </div>
        </div>
    )
};

export default Category