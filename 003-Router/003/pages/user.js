import React from 'react';

const User = ({ posts }) => {
    return (
        <div>
            <h1>Daftar User</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.name}</h3>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default User;