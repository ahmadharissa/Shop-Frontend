import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//components
import Card from "../../../ui/card";

//redux
import { getSubCategory } from "../../../../redux/subCategory/subCategoryAction";

function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const subCategory = useSelector((state) => state.subCategories.item);
    let product;

    useEffect(() => {
        dispatch(getSubCategory(id));
    }, []);

    product = subCategory?.product?.map((item) => {
        return <Card
            key={item._id}
            id={item._id}
            image={item.images[0]}
            name={item.name}
            price={item.price}
        />
    })

    return (
        <div className="container">
            <div className="row">
                {product}
            </div>
        </div>
    )
};

export default Product