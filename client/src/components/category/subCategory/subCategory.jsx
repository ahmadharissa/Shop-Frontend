import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//components
import Card from "../../ui/card";
import Loading from "../../ui/Loading";

//redux
import { getCategory } from "../../../redux/category/categoryAction";

function SubCategory() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { item, loading } = useSelector((state) => state.categories);
    let subCategory;

    useEffect(() => {
        dispatch(getCategory(id));
    }, []);

    subCategory = item?.subCategory?.map((item) => {
        return <Card
            key={item._id}
            id={item._id}
            name={item.name}
            isSubCategory={true}
        />
    })

    return (
        <div className="container">
            <div className="row">
                {loading ? (
                    <Loading />
                ) : (
                    subCategory
                )}
            </div>
        </div>
    )
};

export default SubCategory