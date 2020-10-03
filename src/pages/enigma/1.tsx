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
              <EnigmaBody>
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
              </EnigmaBody>
            </Content>
            <AdRight>
              <h2>Ad right</h2>
            </AdRight>
          </Container>
          <Footer destiny="2" />
        </Body>
      </main>
    </div>
  )
}

export default Enigma1
