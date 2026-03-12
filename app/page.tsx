"use client";

import { useState } from "react";

export default function Home() {
  const premios = [
    "Refrigerante grátis",
    "5% desconto",
    "10% desconto",
    "Borda cheddar",
    "Pizza broto doce",
    "Tente novamente",
  ];

  const [resultado, setResultado] = useState("");

  function girar() {
    const premio = premios[Math.floor(Math.random() * premios.length)];
    setResultado(premio);
  }

  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>🎡 Roleta Premiada</h1>

      <button
        onClick={girar}
        style={{
          marginTop: "30px",
          padding: "20px 40px",
          fontSize: "20px",
          background: "#ff9800",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Girar Roleta
      </button>

      {resultado && <h2 style={{ marginTop: "40px" }}>Você ganhou: {resultado}</h2>}
    </main>
  );
}