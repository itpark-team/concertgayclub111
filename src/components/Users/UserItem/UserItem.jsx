import React, {useState} from 'react';
import UsersApi from "../Api/UsersApi";
import UserEditForm from "../UserEditForm/UserEditForm";

const UserItem = ({user, loadAllUsers}) => {

    let usersApi = new UsersApi();
    let [isShowEditForm, setIsShowEditForm] = useState(false);

    const deleteUser = (id) => {
        usersApi.usersDeleteById(id)
            .then(response => {
                loadAllUsers();
            });
    }


    return (
        <div>
            {user.id} | {user.nickname} | {user.ticketPrice}
            <button onClick={() => deleteUser(user.id)}>delete</button>
            <button onClick={() => setIsShowEditForm(!isShowEditForm)}>edit</button>

            {
                isShowEditForm && <UserEditForm user={user} loadAllUsers={loadAllUsers}/>
            }


        </div>
    );
};

export default UserItem;