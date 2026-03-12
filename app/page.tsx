export default function Home() {
  return (
    <main style={{
      background:"#000",
      color:"#fff",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      fontFamily:"Arial"
    }}>
      
      <h1>🎡 Roleta Premiada</h1>

      <button
        onClick={() => alert("Você ganhou um prêmio!")}
        style={{
          marginTop:"30px",
          padding:"20px 40px",
          fontSize:"20px",
          background:"#ff9800",
          border:"none",
          borderRadius:"10px",
          cursor:"pointer"
        }}
      >
        Girar Roleta
      </button>

    </main>
  )
}