const UserDetail = ({ user }) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

// Mendapatkan daftar ID pengguna untuk generate static pages
export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: false };
}

// Mengambil detail pengguna berdasarkan ID
export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await res.json();

    return {
        props: { user },
    };
}

export default UserDetail;
