import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PlayersPage from "./components/PlayersPage";
import PlayerPage from "./components/PlayerPage";

function App() {
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setfilteredPlayers] = useState([]);
    const [singlePlayer, setSinglePlayer] = useState(null);
    const [search, setSearch] = useState("");

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PlayersPage
                            players={players}
                            setPlayers={setPlayers}
                            search={search}
                            setSearch={setSearch}
                        />
                    }
                ></Route>
                <Route
                    path="/:id"
                    element={
                        <PlayerPage
                            singlePlayer={singlePlayer}
                            setSinglePlayer={setSinglePlayer}
                        />
                    }
                ></Route>
            </Routes>
        </>
    );
}

export default App;
