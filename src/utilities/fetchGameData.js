import axios from "axios";

const baseURL = "https://TankTacticsService.drewcolgin.repl.co/";
const idCheckExtension = "api/check/"
const gameStateExtension = "api/gamestate/"

export async function checkValidId(id) {
    const response = await axios.get(`${baseURL}${idCheckExtension}${id}`).catch(() => false)
    return response.status === 200;
}

export async function getGameState(id) {
    const newGameState = await axios.get(`${baseURL}${gameStateExtension}${id}`)
    return newGameState.data;
}