import Link from 'next/link'

function Navigation() {
  return (
    <div>
<ul>
  <li>
    <Link href="/"><strong>Inicio</strong></Link>
  </li>
  <li>
    <Link href="/recipebook"><strong>Recetario</strong></Link>
  </li>
  <li>
    <Link href="/about"><strong>Sobre nosotros</strong></Link>
  </li>
</ul>
    </div>
  )
}

export default Navigation
