// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2308-ACC-ET-WEB-PT-B";

// Use the APIURL variable for fetch requests
export const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export async function fetchAllPlayers(setPlayers) {
    try {
        const response = await fetch(API_URL + "players");
        const json = await response.json();
        setPlayers(json.data.players);
    } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
    }
}

export async function fetchSinglePlayer(id, setSinglePlayer) {
    try {
        const response = await fetch(API_URL + `players/${id}`);
        const json = await response.json();
        setSinglePlayer(json.data.player);
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${id}!`, err);
    }
}

export async function createNewPlayer(obj) {
    try {
        const response = await fetch(API_URL + "players/", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(obj),
        });
    } catch (error) {
        console.error(error);
    }
}

export async function removePlayer(playerId) {
    try {
        const response = await fetch(API_URL + `players/${playerId}`, {
            method: "DELETE",
        });
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
}

export default API_URL;
