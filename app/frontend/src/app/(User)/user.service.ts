import { typeForm, typeInputs } from "@/types/formAuth";
import axios, { type CreateAxiosDefaults } from "axios";

export default function UserService() {

    const options: CreateAxiosDefaults = {
        baseURL: process.env.URL_BACKEND
    }
    const axiosBasic = axios.create(options);


    function sendRequest(user: typeInputs, type: typeForm): void {


        axiosBasic.post('login')
    }






}