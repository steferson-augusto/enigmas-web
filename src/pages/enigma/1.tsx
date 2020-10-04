import Head from 'next/head'

import {
  Container,
  Content,
  AdTop,
  AdRight,
  Body,
  EnigmaText,
  EnigmaDescription
} from '../../styles/components'
import Footer from '../../styles/components/Footer'

const Enigma1: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Enigma 1</title>
      </Head>

      <main>
        <Body>
          <AdTop>
            <h2>Ad top</h2>
          </AdTop>
          <Container>
            <Content>
              <EnigmaText>Vamos começar fácil...</EnigmaText>
              <EnigmaDescription>
                01110010
                <br />
                01100101
                <br />
                01110011
                <br />
                01110000
                <br />
                01101111
                <br />
                01110011
                <br />
                01110100
                <br />
                01100001
                <br />
              </EnigmaDescription>
            </Content>
            <AdRight>
              <h2>Ad right</h2>
            </AdRight>
          </Container>
          <Footer id="5f791f3a178db0f247e759e6" destiny="2" />
        </Body>
      </main>
    </div>
  )
}

export default Enigma1
