import { useState } from "react";
import { fetchAllPlayers, createNewPlayer } from "./Utils";

export default function NewPlayer({ players, setPlayers, search }) {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("field");
    const [teamID, setTeamID] = useState(1);
    const [imageURL, setImageURL] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        createNewPlayer({
            name: `${name}`,
            breed: `${breed}`,
            status: `${status}`,
            imageUrl: `${imageURL}`,
            teamId: `${teamID}`,
        });

        setName("");
        setBreed("");
        setStatus("field");
        setImageURL("");
        setTeamID("");

        fetchAllPlayers(setPlayers);
    }

    return (
        <div id="new-player-form">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="breed" className="form-label">
                        Breed
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="breed"
                        name="breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="status" className="form-label">
                        Status
                    </label>
                    <select
                        className="form-select"
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => {
                            setStatus(e.target.value);
                        }}
                    >
                        <option>field</option>
                        <option>bench</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="teamID" className="form-label">
                        Team ID
                    </label>
                    <input
                        className="form-control"
                        type="number"
                        id="teamID"
                        name="teamID"
                        value={teamID}
                        onChange={(e) => {
                            setTeamID(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="imageURL" className="form-label">
                        Image url
                    </label>
                    <input
                        className="form-control"
                        type="url"
                        id="imageURL"
                        name="imageURL"
                        value={imageURL}
                        onChange={(e) => {
                            setImageURL(e.target.value);
                        }}
                    />
                </div>
                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
