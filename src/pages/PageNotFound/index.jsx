import { Link } from "react-router-dom";

const PageNotFound = (props) => {
    return <main style={{ padding: "1rem" }}>
        <h2>404 Not Found</h2>
        <p>There's nothing here!</p>
        Go <Link to="/">Home</Link>
    </main>
};

export default PageNotFound;