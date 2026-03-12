"use client"
import { useState } from "react"

const premios = [
  "5% desconto",
  "10% desconto",
  "Refrigerante grátis",
  "Borda cheddar",
  "Pizza broto doce",
  "Frete grátis",
  "Tente novamente"
]

export default function Page(){

  const [angulo,setAngulo] = useState(0)
  const [premio,setPremio] = useState("")
  const [girando,setGirando] = useState(false)

  function girar(){

    if(girando) return

    setGirando(true)

    const index = Math.floor(Math.random()*premios.length)

    const grausPorPremio = 360/premios.length

    const rotacao = 360*6 + (360 - index*grausPorPremio)

    setAngulo(rotacao)

    setTimeout(()=>{
      setPremio(premios[index])
      setGirando(false)
    },4000)

  }

  return(

  <div style={{
  height:"100vh",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  fontFamily:"Arial",
  background:"#111",
  color:"white"
  }}>

  <h1>🎡 Roleta Premiada</h1>

  <div style={{position:"relative"}}>

  <div style={{
  position:"absolute",
  top:"-20px",
  left:"50%",
  transform:"translateX(-50%)",
  fontSize:"40px"
  }}>
  ▼
  </div>

  <div style={{
  width:"350px",
  height:"350px",
  borderRadius:"50%",
  border:"8px solid orange",
  transform:`rotate(${angulo}deg)`,
  transition:"transform 4s ease-out",
  background:
  "conic-gradient(red,orange,yellow,green,blue,purple,pink)"
  }}>

  </div>

  </div>

  <button
  onClick={girar}
  style={{
  padding:"15px 40px",
  fontSize:"20px",
  marginTop:"40px",
  cursor:"pointer",
  borderRadius:"10px"
  }}
  >
  Girar Roleta
  </button>

  {premio && (

  <h2 style={{marginTop:"30px"}}>
  🎁 Você ganhou: {premio}
  </h2>

  )}

  </div>

  )

}