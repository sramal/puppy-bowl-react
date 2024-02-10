export default function Teammates({ singlePlayer }) {
    return (
        <div id="teammates-container" className="container text-center">
            <div className="row">
                {singlePlayer.team &&
                    singlePlayer.team.players
                        .filter((x) => x.id != singlePlayer.id)
                        .map((player) => {
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
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
            </div>
        </div>
    );
}
