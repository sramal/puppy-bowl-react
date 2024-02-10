export default function Title({ text, classes }) {
    return (
        <div className="jumbotron-fluid">
            <div className="container-fluid">
                <div className="row">
                    <h2 className={classes.join(" ")}>{text}</h2>
                </div>
            </div>
        </div>
    );
}
