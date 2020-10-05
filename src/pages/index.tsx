import Head from 'next/head'
import Link from 'next/link'

import { Body, GlitchButton } from '../styles/components'

import Algarisms from '../styles/components/Algarism'

// const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

// const generateAlgarisms = (qtd: number): AlgarismProps[] => {
//   const algarismos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
//   const data = []
//   for (let i = 0; i < qtd; i++) {
//     data.push({
//       fontSize: random(24, 46),
//       position: random(1, 99),
//       delay: random(0.1, 5),
//       duration: random(12, 24),
//       content: algarismos.substr(random(1, 35), 1)
//     })
//   }
//   return data
// }

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Body>
          <Algarisms />
          <Link href="/enigma/[id]" as="/enigma/5f791f3a178db0f247e759e6">
            <GlitchButton>INICIAR</GlitchButton>
          </Link>
        </Body>
      </main>
    </div>
  )
}

export default Home
