import React, {useState} from 'react';
import UsersApi from "../Api/UsersApi";

const UserAddNewForm = ({loadAllUsers}) => {

    let [inputUser, setInputUser] = useState({
        nickname: "",
        ticketPrice: ""
    });

    let usersApi = new UsersApi();

    const addNewUser = () => {
        console.log(inputUser);
        usersApi.usersAddNew(inputUser)
            .then(response => {
                loadAllUsers();

                setInputUser({
                    nickname: "",
                    ticketPrice: ""
                });
            });
    }

    return (
        <div>
            <div>
                <input type="text" value={inputUser.nickname}
                       onChange={event => setInputUser({...inputUser, nickname: event.target.value})}
                       placeholder={"nickname"}/>
            </div>
            <div>
                <input type="number" value={inputUser.ticketPrice}
                       onChange={event => setInputUser({...inputUser, ticketPrice: event.target.value})}
                       placeholder={"ticket price"}/>
            </div>
            <div>
                <button onClick={addNewUser}>Add concert user</button>
            </div>
        </div>
    );
};

export default UserAddNewForm;