import React, {useEffect, useState} from 'react';
import UsersApi from "../Api/UsersApi";
import UserItem from "../UserItem/UserItem";
import UserAddNewForm from "../UserAddNewForm/UserAddNewForm";

const UsersList = () => {
    let [users, setUsers] = useState([]);
    let usersApi = new UsersApi();

    const loadAllUsers = () => {
        usersApi.usersGetAll()
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadAllUsers();
    }, []);

    return (
        <div>
            <UserAddNewForm loadAllUsers={loadAllUsers}/>
            {
                users.length === 0
                    ? <div>Данных о пользователях нет</div>
                    : users.map(user => <UserItem user={user} key={user.id} loadAllUsers={loadAllUsers}/>)
            }
        </div>
    );
};

export default UsersList;