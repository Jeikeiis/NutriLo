import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function IndexPage() {
  return (
    
    <div>
      <head>
      <title>NutriLo</title>
      </head>
      <div class="flex">
      <div class="header"><br />
      <div class="introheader1">
      </div>
      <div class="main">
      <fieldset><h2>Bienvenidos a nuestra página de nutrición, donde promovemos un estilo de vida saludable a través de la alimentación balanceada y la actividad física.</h2></fieldset> <br/> 
      <fieldset class="fieldstinto"><p>En este sitio, encontrarás información detallada sobre nutrición, recetas saludables y consejos para mejorar tu bienestar general. Nuestro enfoque se basa en la evidencia científica y nuestro objetivo es ayudarte a alcanzar tus metas de salud y bienestar a largo plazo.
  
  Te invitamos a explorar nuestro sitio y descubrir más sobre nuestro equipo de expertos en nutrición, nuestros servicios y filosofía de trabajo.<br/> <br/> Puedes navegar fácilmente a través de nuestro menú de navegación, el cual incluye tres opciones principales: "Sobre nosotros", "Recetario" e "Inicio". Si buscas aprender más sobre nuestro equipo y filosofía, haz clic en "Sobre nosotros". Si quieres encontrar recetas saludables y fáciles de preparar, visita nuestro "Recetario". Si estás listo para empezar tu viaje hacia una vida más saludable, dirígete a "Inicio". ¡Gracias por visitarnos!</p>
    </fieldset>
    </div>
    </div>
    </div><br/>
    
    </div>
   
  )
  }
  export default IndexPage