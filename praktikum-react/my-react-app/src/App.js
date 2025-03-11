import React from 'react';
import Counter from './Counter';
import Greeting from './Greeting';


//komponen header
function Header(){
  return(
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

//komponen main
function Main(){
  return(
    <main>
      <h2>Selamat Datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  );
}

//komponen footer
function Footer(){
  return(
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  );
}

//komponen App yang menggunakan Header, Main, dan Footer
function App(){
  return(
    <div>
      <Header />
      <Main />
      <Greeting name="Dea" />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;