import Link from "next/link";

const Users = ({ users }) => {
    return (
        <div>
            <h1>Daftar Pengguna</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/user/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Menggunakan getStaticProps untuk mengambil data saat build time
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {
        props: { users },
    };
}

export default Users;
