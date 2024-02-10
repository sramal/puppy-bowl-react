import { Link } from "react-router-dom";

export default function Player({ player }) {
    return (
        <div id="player-container" className="container text-center">
            <div className="row">
                <div className="col">
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
                            <Link to="/" className="btn btn-primary btn-sm m-1">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
