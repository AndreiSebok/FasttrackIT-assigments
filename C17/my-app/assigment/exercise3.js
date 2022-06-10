import React from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {tittle: 'My new website', body: 'lorem ipsum...', author: 'mario', id:1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id:2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id:3}
    ]);

    return (
        <div className={home}>
            {blogs.map((blog) => (
                <div className={blog-preview} key={blog.id}>
                    <h2>{ blog.tite }</h2>
                    <p>Writer byt { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;