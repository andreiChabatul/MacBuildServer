import { typeForm, typeInputs } from "@/types/formAuth";
import axios from "axios";

export const UserService = {

    async sendRequest(user: typeInputs, type: typeForm) {
        const URL = process.env.URL_BACKEND || 'http://localhost:4200/api/auth/'

        const response = await axios.post(`${URL}${type}`, user);
        console.log(response, 'res')
        return response.data;
    }

}