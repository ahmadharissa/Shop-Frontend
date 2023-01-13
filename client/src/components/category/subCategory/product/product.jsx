import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//components
import Card from "../../../ui/card";
import Loading from "../../../ui/Loading";

//redux
import { getSubCategory } from "../../../../redux/subCategory/subCategoryAction";

function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { item, loading } = useSelector((state) => state.subCategories);
    let product;

    useEffect(() => {
        dispatch(getSubCategory(id));
    }, []);

    product = item?.product?.map((item) => {
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
                {loading ? (
                    <Loading />
                ) : (
                    product
                )}
            </div>
        </div>
    )
};

export default Product