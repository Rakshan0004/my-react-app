function Ninja() {
    const title = 'Welcome to the Blog';
    const likes = 40;

    const link = "http://www.google.com";

    return (
        <div className="ninja">
            <div className="content">
                <h1>{title}</h1>
                <p>Liked {likes} times</p>
                <p>{ Math.random()*10 }</p>
                <p>[1,2,3,4,5]</p>
                <a href={link}>Google Site</a>
            </div>
        </div>
    );
}

export default Ninja;
