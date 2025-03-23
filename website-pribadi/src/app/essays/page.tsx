// import type { Metadata } from "next";

// export default function Essays() {
//     return <div>Esai</div>
// }

// export const metadata: Metadata = {
//   title: 'Essai',
//   description: 'Halaman tentang essai saya.',
//   openGraph: {
//     title: 'Essai',
//   }
// }

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Essai',
    description: 'Halaman tentang essai saya.',
    openGraph: {
      title: 'Essai',
    }
}

export default function Home () {
  return (
      <div className="mt-16 px-8">
          <header>
              <h1 className="font-bold text-4xl text-zinc-800">Essai</h1>
          </header>
      </div>
  );
}
