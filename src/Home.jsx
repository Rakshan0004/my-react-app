import { useState } from "react";
import Navbar from "./components/Navbar"
import BlogList from "./components/BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: ' lorem ipsum...', author: 'mario', id:1 },
        { title: 'My travel blog', 
        body: 'Exploring the world one step at a time...', 
        author: 'luigi', id: 2 },
        { title: 'Tech Tips', 
        body: 'Sharing insights and hacks for tech enthusiasts...', 
        author: 'peach', id: 3 }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    )
}

export default Home;