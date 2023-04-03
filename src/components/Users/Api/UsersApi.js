import axios from "axios";

class UsersApi {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/users"
        });
    }

    async usersGetAll() {
        return await this.#axios.get("/getAll");
    }

    async usersDeleteById(id) {
        return await this.#axios.delete(`/deleteById/${id}`)
    }

    async usersAddNew(user) {
        return await this.#axios.post("/addNew", user);
    }

    async usersUpdateById(id, user) {
        return await this.#axios.put(`/updateById/${id}`, user);
    }

}

export default UsersApi;