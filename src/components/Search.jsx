import { Link } from "react-router-dom";

export default function Search({ players, search, setSearch }) {
    return (
        <div id="search-container" className="container">
            <form className="row g-3">
                <label htmlFor="search" className="form-label">
                    Search
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="search"
                    name="search"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </form>
        </div>
    );
}
