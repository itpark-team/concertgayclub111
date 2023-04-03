import React from 'react';
import {useState} from "react";
import UsersApi from "../Api/UsersApi";

const UserEditForm = ({user, loadAllUsers}) => {

    let [editingUser, setEditingUser] = useState({
        nickname: user.nickname,
        ticketPrice: user.ticketPrice
    });
    let usersApi = new UsersApi();

    const editUser = () => {
        usersApi.usersUpdateById(user.id, editingUser)
            .then(response => {
                loadAllUsers();
            });
    }

    return (
        <div>
            <div>
                <input type="text" value={editingUser.nickname}
                       onChange={event => setEditingUser({...editingUser, nickname: event.target.value})}
                       placeholder={"nickname"}/>
            </div>
            <div>
                <input type="number" value={editingUser.ticketPrice}
                       onChange={event => setEditingUser({...editingUser, ticketPrice: Number(event.target.value)})}
                       placeholder={"ticket price"}/>
            </div>
            <div>
                <button onClick={editUser}>Edit concert user</button>
            </div>
        </div>
    );
};

export default UserEditForm;