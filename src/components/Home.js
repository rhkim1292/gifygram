import '../styles/Home.css';

function Home() {
    return (
        <div className="home-container">
            <form>
                <input placeholder="Search" />
            </form>
            <div className="results-container"></div>
        </div>
    );
}

export default Home;
