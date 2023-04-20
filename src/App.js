
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="#">
        <h1>Dictionary</h1>

      </header>
      <main>
        <Dictionary defaultKeyword="dictionary" />  
      </main>
      <footer className="text-center">Coded by Anika Jane</footer>
      </div>
    </div>
  );
}

