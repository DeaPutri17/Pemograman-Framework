This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Laporan Praktikum

|        |   Pemrograman Berbasis Framework   |
|--------|------------------------------------|
|Nama    | Dea Putri Nastiti                  |
|NIM     | 2241720117                         |
|Kelas   | TI-3B                              |
|Absen   | 05                                 |

## Jawaban Praktikum 1
1.	Jelaskan kegunaan masing-masing dari Git, VS Code dan NodeJS yang telah Anda install pada sesi praktikum ini! 
-	Git

    Git adalah tools yang digunakan untuk pengembangan perangkat lunak dan website.

    Kegunaan Git:  
    a.	Digunakan untuk berkolaborasi / mengerjakan proyek dengan banyak orang / tim.
    
    b. Mengelola dan menyimpan versi kode secara efisien.
    
    c.	Mencegah Perubahan Kode yang Bisa Merusak Kode Asli
    
    d.	Memungkinkan rollback ke versi sebelumnya jika terjadi kesalahan

---

- Visual Studio Code (VS Code)

    Visual Studio Code (VS Code) adalah editor source code buatan Microsoft yang beroperasi pada komputer desktop dan kompatibel dengan sistem operasi Windows, macOS, dan Linux.
    
    Kegunaan:
    
    a.	membuat atau mengedit source code dengan berbagai bahasa pemrograman, seperti  JavaScript, dan sebagainya.
    
    b.	Memudahkan penulisan, debugging, dan pengelolaan kode.
    
    c.	Mendukung berbagai bahasa pemrograman seperti JavaScript, Python, C++, HTML/CSS.
    
    d.	Dapat diperluas dengan ekstensi seperti Git, Prettier, dan Live Server.

---

-	NodeJS 

    NodeJS adalah lingkungan runtime lintas-platform open source yang memungkinkan pengembang untuk menulis kode dalam JavaScript dan mengeksekusinya di luar peramban web.

    Kegunaan:


    a.	Membuat aplikasi backend seperti API RESTful, server web, dan microservices.

    b.	Menjalankan JavaScript langsung di terminal atau server.

    c.	Digunakan dalam framework seperti Express.js dan Next.js untuk pengembangan web.

2.	Buktikan dengan screenshoot yang menunjukkan bahwa masing-masing tools tersebut telah berhasil terinstall di perangkat Anda!
-	Git

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/git.png)

-	VS Code
 
    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/vscode.png)

-	NodeJS

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/nodejs.png)

---

 ## Jawaban Praktikum 2

1.	Pada Langkah ke-2, setelah membuat proyek baru menggunakan Next.js, terdapat beberapa istilah yang muncul. Jelaskan istilah tersebut, TypeScript, ESLint, Tailwind CSS, App Router, Import alias, App router, dan Turbopack!

    a.	TypeScript

    TypeScript adalah bahasa pemrograman yang dikembangkan oleh Microsoft dan merupakan superset dari JavaScript. TypeScript menambahkan static typing (penentuan tipe data sebelum runtime) untuk mencegah error sejak awal pengembangan.
    Kegunaan:
    -	Membantu mendeteksi error sebelum kode dijalankan.
    -	Memudahkan pengembangan dengan autocomplete dan tipe data yang lebih jelas.
    -	Digunakan dalam proyek skala besar agar kode lebih terstruktur.

    b.	ESLint

    ESLint adalah alat untuk menganalisis dan memperbaiki kode JavaScript/TypeScript agar sesuai dengan standar tertentu.
    Kegunaan:
    -	Membantu menemukan dan memperbaiki error atau bug dalam kode.
    -	Memastikan kode tetap rapih dan sesuai standar (misalnya menggunakan const daripada var).
    -	Mencegah penggunaan kode yang tidak efisien atau deprecated.

    c.	Tailwind CSS

    Tailwind CSS adalah framework CSS utility-first yang memungkinkan styling langsung dalam HTML atau JSX tanpa membuat file CSS terpisah.
    Kegunaan:
    -	Mempermudah styling dengan kelas utility seperti p-4, bg-blue-500.
    -	Mengurangi penggunaan file CSS yang panjang.

    d.	App Router

    App Router adalah sistem routing terbaru di Next.js 13+ yang menggantikan Pages Router. Menggunakan sistem file-based routing dengan folder app/.
    Kegunaan:
    -	Mendukung Server Components (pengolahan data di server, bukan browser).
    -	Mendukung Layout global dengan layout.tsx.
    -	Meningkatkan performa dan efisiensi rendering.

    e.	Import alias

    Import Alias adalah fitur yang memungkinkan kita menggunakan path pendek saat mengimpor file, sehingga lebih mudah dikelola dalam proyek besar.
    Kegunaan:
    -	Menghindari penggunaan path panjang seperti ../../components/Button.
    -	Mempermudah navigasi dalam proyek Next.js.

    f.	Turbopack

    Turbopack adalah bundler baru yang dikembangkan oleh tim Next.js untuk menggantikan Webpack. Dibangun menggunakan Rust, sehingga lebih cepat daripada Webpack dan Vite.
    Kegunaan:
    -	Build & Hot Reloading lebih cepat dibanding Webpack.
    -	Lebih efisien dalam mengelola perubahan kode.
    -	Meningkatkan performa saat pengembangan proyek besar.

2.	Apa saja kegunaan folder dan file yang ada pada struktur proyek React yang tampil pada gambar pada tahap percobaan ke-3! 

    a.	.next/

    Folder hasil build dari Next.js, digunakan untuk caching, SSR, SSG, dan optimasi performa.

    b.	node_modules/

    Menyimpan semua library & dependencies yang diinstal via npm atau yarn.

    c.	public/

    Folder untuk file statis yang bisa diakses langsung via browser tanpa proses bundling oleh Next.js.

    d.	favicon.ico

    Ikon kecil yang muncul di tab browser atau bookmark.

    e.	globals.css

    File CSS global yang diterapkan ke seluruh aplikasi Next.js.

    f.	layout.tsx

    Komponen untuk membungkus semua halaman agar memiliki struktur yang sama (header, footer, sidebar).

    g.	page.tsx

    komponen utama untuk halaman di Next.js

    h.	.gitignore

    Menentukan file/folder yang tidak boleh di-track oleh Git.

    i.	eslint.config.mjs

    Konfigurasi ESLint, alat untuk mendeteksi error & memastikan kode sesuai standar.

    j.	next-env.d.ts

    File deklarasi TypeScript untuk Next.js, memastikan fitur Next.js dikenali oleh TypeScript.

    k.	next.config.ts

    File konfigurasi Next.js untuk mengatur fitur tambahan seperti Image Optimization, API Routes, dan Custom Headers.

    l.	package-lock.json

    Mengunci versi dependencies yang diinstal, memastikan konsistensi antar lingkungan pengembangan.

    m.	package.json

    File utama yang menyimpan informasi proyek & dependencies.

    n.	postcss.config.mjs

    Konfigurasi PostCSS, digunakan untuk transformasi CSS seperti Tailwind CSS.

    o.	README.md

    Dokumentasi proyek, biasanya berisi cara install & menjalankan aplikasi.

    p.	tsconfig.json

    Konfigurasi TypeScript untuk Next.js.

3.	Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!


    a.	Membuat folder proyek baru dengan nama **belajar-react**. Melalui konsol/command prompt/CMD masuk ke dalam folder tersebut dan jalankan perintah ini: 

    **npx create-next-app**

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak2_a.png)    

    b.	Buat proyek baru dengan nama **hello-world** seperti di bawah ini. Nama proyek ini perlu dimasukkan pertama kali melalui konsol.

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak2_b.png)

    c.	Buka folder proyek **hello-world** menggunakan VS Code. Masuk ke dalam folder proyek hello-world dengan perintah:

    cd hello-world

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak2_c1.png)

    Kemudian setelah masuk ke folder hello-world, masukkan perintah:

    code .
    
    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak2_c2.png)

    Maka VS Code akan membuka project react Anda yang telah dibuat bernama hello-world. Dan akan menampilkan struktur folder proyek seperti di bawah ini

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak2_c3.png)

    d.	Running proyek hello-world dengan memasukkan perintah di bawah ini melalui konsol atau terminal di dalam VS Code.

    Npm run dev

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak2_d.png)

    Tunggu proses kompilasi hingga selesai. Lalu Anda dapat membuka alamat localhost di browser: http://localhost:3000/

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak2_d2.png)

---

 ## Jawaban Praktikum 3

 1.	Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!

    a.	Di dalam folder proyek yang telah dibuka di VS Code, buka file page.tsx 

    b.	Tambahkan fungsi MyButton yang mengembalikan markup komponen button yang akan ditambahkan ke dalam webpage
    
    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak3_b.png)

    c.	Tambahkan komponen button tersebut di samping button Read Our Docs.
    
    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak3_c.png)

    Perhatikan bahwa komponen **MyButton** dimulai dengan huruf kapital. Dengan cara itulah Anda mengetahui bahwa itu adalah sebuah komponen React. Nama **komponen React harus selalu dimulai dengan huruf kapital**, sedangkan tag HTML harus menggunakan huruf kecil. Kata kunci **export default** menentukan komponen utama di dalam berkas (file).

    d.	Simpan perubahan dan coba lihat perubahan melalui web browser!
    
    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak3_d.png)

    Terdapat button “Buka Halaman” berwarna biru. Apabila di klik akan mengarah ke halaman http://localhost:3000/ di tab baru.

---

 ## Jawaban Praktikum 4

 1.	Untuk apakah kegunaan sintaks user.imageUrl? 

    user.imageUrl berfungsi untuk menentukan sumber gambar profil pengguna dalam elemen <img>. user adalah sebuah objek yang menyimpan informasi pengguna. user,imageUrl berisi string URL gambar pengguna. Saat kode dijalankan, React akan mengganti user.imageUrl dengan nilai sebenarnya saat merender elemen <img>

2.	Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan

    a.	Tambahkan kode JSX di bawah ini ke dalam file page.tsx

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak4_a.png)

    b.	Tambahkan komponen MyProfile setelah kompnen MyButton.
    
    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak4_b.png)

    c.	Simpan dan amati perubahan di halaman web yang dihasilkan!

    ![gambar1](/01-setup-environment/belajar-react/hello-world/ss/step_prak4_c.png)

    
