import type { Metadata } from "next";
import Image from "next/image";
import profilePic from "../../public/images/Dea Putri Nastiti.jpg";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya.",
  openGraph: {
    title: "Tentang Saya",
  },
};

export default function AboutMe() {
  return (
    <div className="mt-16 px-8 flex flex-col items-center">
      {/* Foto Profil */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
        <Image
          src={profilePic}
          alt="Foto Profil"
          className="rounded-full shadow-lg border-4 border-white"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Header */}
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
        <p className="text-lg text-zinc-600 mt-4 max-w-2xl">
          Seorang mahasiswa Teknologi Informasi dengan minat di bidang{" "}
          <span className="font-semibold text-teal-500">
            Data Analytics, Pengembangan Web, dan Big Data.
          </span>{" "}
          Gemar memecahkan masalah melalui teknologi dan terus belajar hal baru.
        </p>
      </header>

      {/* Skill Badges */}
      <div className="mt-12 flex flex-wrap gap-3 justify-center">
        {["Python", "SQL", "Power BI", "Flutter", "Laravel"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-full shadow-md transition-transform hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Kontak Box */}
      <div className="mt-12 w-full max-w-lg bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-zinc-800">Kontak</h2>
        <p className="text-zinc-600 mt-2">
          Jika ingin terhubung, silakan hubungi saya melalui:
        </p>
        <div className="mt-4 space-y-3">
          <p className="flex items-center text-zinc-700">
            📧 <span className="ml-2">2241720117@student.polinema.ac.id</span>
          </p>
          <p className="flex items-center text-zinc-700">
            🔗 <a href="https://github.com/DeaPutri17" target="_blank" className="ml-2 text-teal-500 hover:underline">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}
