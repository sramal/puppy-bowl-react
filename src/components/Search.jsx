export default function Search({ search, setSearch }) {
    return (
        <div id="search-container" className="container text-center">
            <div className="row">
                <label htmlFor="search">Search</label>
                <div className="input-group mb-3">
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
                </div>
            </div>
        </div>
    );
}
