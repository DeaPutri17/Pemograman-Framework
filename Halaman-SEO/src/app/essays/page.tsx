
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'Essai',
//     description: 'Halaman tentang essai saya.',
//     openGraph: {
//       title: 'Essai',
//     }
// }

// export default function Home () {
//   return (
//       <div className="mt-16 px-8">
//           <header>
//               <h1 className="font-bold text-4xl text-zinc-800">Essai</h1>
//           </header>
//       </div>
//   );
// }

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Esai',
    description: 'Halaman tentang esai saya.',
    openGraph: {
      title: 'Esai',
    }
};

type EssaiItem = {
    title: string;
    description: string;
    url: string;
};

const articles: EssaiItem[] = [
    {
        title: "Buka Bersama TI-3B",
        description: "Kelas TI-3B melakukan buka bersama di Hotways Begawan.",
        url: "https://example.com"
    },
    {
        title: "Analisis Sentimen pada Ulasan Produk di E-Commerce",
        description: "Menganalisis bagaimana ulasan produk dapat mempengaruhi kepercayaan pelanggan.",
        url: "https://example.com"
    },
    {
        title: "Penggunaan Flutter untuk Aplikasi Mobile",
        description: "Membahas keunggulan Flutter dalam pengembangan aplikasi lintas platform.",
        url: "https://example.com"
    },
    {
        title: "Dampak Teknologi terhadap Gaya Hidup Mahasiswa",
        description: "Meneliti bagaimana teknologi mempengaruhi kebiasaan belajar dan produktivitas mahasiswa.",
        url: "https://example.com"
    }
];

export default function Essays() {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
                <p className="text-base mt-6 text-zinc-600">Berikut adalah beberapa esai yang telah saya tulis.</p>
            </header>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                    <a key={index} href={article.url} className="block p-6 rounded-lg shadow-lg bg-white transition hover:shadow-xl">
                        <h2 className="text-xl font-semibold text-zinc-800">{article.title}</h2>
                        <p className="mt-2 text-zinc-600">{article.description}</p>
                        <span className="mt-4 inline-block text-teal-500 font-medium">Baca selengkapnya →</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
