import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom'

//redux
import { logout } from '../../redux/user/userActions';

//css
import "./profile.css"

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.users)

    const handelClickLogOut = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate(`/`);
    }


    const handelClickReset = (e) => {
        e.preventDefault();
        const enter = window.prompt("Enter new password")
        axios.post(process.env.REACT_APP_API + '/resetPassword', { "password": enter })
    }

    return (
        <div className="container" style={{ marginTop: "1%", marginBottom: "1%" }}>
            <h2 style={{ textAlign: "center" }}>User Profile Card</h2>
            <div className="card" style={{ borderRadius: "1.25rem" }}>
                {user.avatar && <img src={process.env.REACT_APP_API + '/users/' + user.avatar} alt={user.lastName} style={{ width: "100%" }} />}
                <h1>{user.firstName + ' ' + user.lastName}</h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <div style={{ cursor: 'pointer' }} onClick={handelClickReset}><i class="bi bi-pencil-square"></i> reset password</div>
                <p><button className="btn btn-dark logout" onClick={handelClickLogOut} >Log out</button></p>
            </div>
        </div>
    )
}

export default Profile