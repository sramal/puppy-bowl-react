import { useEffect } from "react";
import { useParams } from "react-router";
import Title from "./Title";
import Player from "./Player";
import Teammates from "./Teammates";
import { fetchSinglePlayer } from "./Utils";

export default function PlayerPage({ singlePlayer, setSinglePlayer }) {
    const { id } = useParams();

    useEffect(() => {
        fetchSinglePlayer(id, setSinglePlayer);
    });

    return (
        <>
            <Title
                text="Player"
                classes={["display-3", "text-center", "bg-black", "text-white"]}
            />

            {singlePlayer && <Player player={singlePlayer} />}

            <hr />

            <Title
                text="Teammates"
                classes={["display-6", "text-center", "bg-black", "text-white"]}
            />

            {singlePlayer && <Teammates singlePlayer={singlePlayer} />}
        </>
    );
}
