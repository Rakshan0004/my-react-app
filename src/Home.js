import Navbar from "./components/Navbar"

const Home = () => {

    const handleClick = () => {
        console.log('hello');
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }

    return (
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('rakshan', e)}>Click me again</button>
        </div>
    )
}

export default Home;