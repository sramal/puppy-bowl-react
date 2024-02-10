import Title from "./Title";
import NewPlayer from "./NewPlayer";
import Players from "./Players";
import Search from "./Search";

export default function PlayersPage({
    players,
    setPlayers,
    search,
    setSearch,
}) {
    return (
        <>
            <Title
                text="Welcome to Puppy Bowl 2024"
                classes={["display-3", "text-center", "bg-black", "text-white"]}
            />

            <NewPlayer
                players={players}
                setPlayers={setPlayers}
                search={search}
            />

            <hr />

            <Search players={players} search={search} setSearch={setSearch} />

            <hr />

            <Title
                text="Players"
                classes={["display-6", "text-center", "bg-black", "text-white"]}
            />

            <Players
                players={players}
                setPlayers={setPlayers}
                search={search}
            />
        </>
    );
}
