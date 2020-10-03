import Head from 'next/head'

import {
  Container,
  Content,
  AdTop,
  AdRight,
  Body,
  EnigmaText,
  EnigmaBody
} from '../../styles/components'
import Footer from '../../styles/components/Footer'
import ImagemEnigma from '../../assets/Enigma3.png'

const Enigma3: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Enigma 3</title>
      </Head>

      <main>
        <Body>
          <AdTop>
            <h2>Ad top</h2>
          </AdTop>
          <Container>
            <Content>
              <EnigmaText>Espelho + fumaça</EnigmaText>
              <EnigmaBody>
                <img src={ImagemEnigma} width="100%" />
              </EnigmaBody>
            </Content>
            <AdRight>
              <h2>Ad right</h2>
            </AdRight>
          </Container>
          <Footer destiny="4" />
        </Body>
      </main>
    </div>
  )
}

export default Enigma3