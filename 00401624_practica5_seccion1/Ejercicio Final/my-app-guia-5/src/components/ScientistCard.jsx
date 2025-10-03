// src/components/ScientistCard.jsx
export default function ScientistCard({
  nombre,
  foto,
  profesion,
  premiosCantidad,
  premiosLista,
  descubrio
}) {
  return (
    <article className="card">
      <div className="card-header">
        <img className="avatar" src={foto} alt={`Foto de ${nombre}`} />
        <h2 className="nombre">{nombre}</h2>
      </div>
      <ul className="detalles">
        <li><strong>Profesión:</strong> {profesion}</li>
        <li><strong>Premios:</strong> {premiosCantidad} ({premiosLista.join(", ")})</li>
        <li><strong>Descubrió:</strong> {descubrio}</li>
      </ul>
    </article>
  );
}
