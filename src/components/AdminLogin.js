import axios from "axios";
import {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";


export default function AdminLogin() {

    const baseURL = "https://TankTacticsService.drewcolgin.repl.co/";
    const [id, setID] = useState();

    async function generateID() {
        const response = await axios.get(`${baseURL}api/generate`)
        return response.data;
    }

    async function registerID(id, name) {
        await axios.put(`${baseURL}api/register/${id}`, {name})
    }

    useEffect(() => {
        generateID().then(id => registerID(id, id).then(() => setID(id)))
    }, [])


    return (
        <div>
            {id && <Redirect to={`/${id}`}/>}
        </div>
    )
}