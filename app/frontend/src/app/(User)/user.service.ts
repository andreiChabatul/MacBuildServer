import { typeForm, typeInputs } from "@/types/formAuth";
import axios from "axios";

export const UserService = {

    BASE_URL: 'http://localhost:4200/api/auth/',

    async sendRequest(user: typeInputs, type: typeForm) {
        const response = await axios.post(`${this.BASE_URL}${type}`, user);
        return response.data;
    }

}