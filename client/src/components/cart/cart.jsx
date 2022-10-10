import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

//components
import Card from '../ui/card'

//redux
import { LOGIN_SUCCESS } from '../../redux/user/userTypes'

//css
import './cart.css'

//utils
import getData from '../../utils/getData'

function Cart() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users)
    let price = 0;
    var userR = {};
    var order = [];

    const product = user?.wishlist?.map((item) => {
        return <Card
            key={item._id}
            id={item._id}
            image={item.images[0]}
            name={item.name}
            price={item.price}
        />
    })

    const coast = user?.wishlist?.map((item) => price += item.price)

    const handelClick = async () => {
        await axios.post(process.env.REACT_APP_API + '/order',
            {
                "name": user.firstName + ' ' + user.lastName,
                "email": user.email,
                "phone": user.phone,
                "order": order
            });
        await axios.patch(process.env.REACT_APP_API + '/user/removeAllWishList');
        getData(localStorage.token).then(response => {
            userR = response;
            dispatch({ type: LOGIN_SUCCESS, payload: userR });
        });
    }

    user?.wishlist?.forEach(w => {
        order.push(w._id)
    });

    return (
        <div className="container">
            <div className='row'>
                {product}
            </div>
            {
                user?.wishlist?.length > 0 &&
                <div className='order'>
                    <p>Price : <span style={{ color: "red" }}>{coast && coast[coast.length - 1] + " $"}</span></p>
                    <button className='btn btn-primary' style={{ width: "100%" }} onClick={handelClick}>order</button>
                </div>
            }
        </div>
    )
}

export default Cart