// src/App.jsx
import { scientists } from "./data/scientists";
import ScientistCard from "./components/ScientistCard";
import "./index.css"; // usa tus estilos

export default function App() {
  return (
    <main className="page">
      <h1 className="title">Científicos Notables</h1>
      <section className="cards">
        {scientists.map((sci) => (
          <ScientistCard
            key={sci.id}
            nombre={sci.nombre}
            foto={sci.foto}
            profesion={sci.profesion}
            premiosCantidad={sci.premiosCantidad}
            premiosLista={sci.premiosLista}
            descubrio={sci.descubrio}
          />
        ))}
      </section>
    </main>
  );
}
