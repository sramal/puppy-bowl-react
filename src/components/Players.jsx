import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllPlayers, removePlayer } from "./Utils";

export default function Players({ players, setPlayers }) {
    useEffect(() => {
        fetchAllPlayers(setPlayers);
    });

    return (
        <div id="all-players-container" className="container text-center">
            <div className="row">
                {players.map((player) => {
                    return (
                        <div className="col" key={player.id}>
                            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img
                                    src={player.imageUrl}
                                    className="card-img-top img-fluid"
                                    alt={`Image of ${player.name}`}
                                />
                                <div className="card-body">
                                    <p className="card-text text-start">
                                        Name: {player.name}
                                    </p>
                                    <p className="card-text text-start">
                                        Breed: {player.breed}
                                    </p>
                                    <p className="card-text text-start">
                                        Status:{" "}
                                        {player.status[0].toUpperCase() +
                                            player.status.substring(1)}
                                    </p>
                                    <p className="card-text text-start">
                                        Team: {player.teamId}
                                    </p>
                                    <Link
                                        to={"/" + player.id}
                                        className="btn btn-primary btn-sm m-1"
                                    >
                                        Info
                                    </Link>
                                    <Link
                                        to={"/"}
                                        className="btn btn-primary btn-sm m-1"
                                        onClick={() => {
                                            removePlayer(player.id);
                                        }}
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
