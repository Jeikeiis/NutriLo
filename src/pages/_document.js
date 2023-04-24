import { Html, Head, Main, NextScript, } from 'next/document'
import Navigation from '../../components/Navigation'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <NextScript /><br/>
      <footer><Navigation /></footer>
      </body>
    </Html>
  )
}
