import Head from 'next/head'

import {
  Container,
  Content,
  AdTop,
  AdRight,
  Body,
  EnigmaText,
  EnigmaBody,
  PathEnigma2
} from '../../styles/components'
import Footer from '../../styles/components/Footer'

const Enigma2: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Enigma 2</title>
      </Head>

      <main>
        <Body>
          <AdTop>
            <h2>Ad top</h2>
          </AdTop>
          <Container>
            <Content>
              <EnigmaText>
                Houveram doze trabalhos porém só quero um.
              </EnigmaText>
              <EnigmaBody>
                <svg width="100%" viewBox="0 0 230.813 88.063">
                  <PathEnigma2
                    fill="none"
                    stroke="#e1e1e6"
                    strokeWidth="4"
                    d="M0,165a15.018,15.018,0,0,0,10,0c11.672-4.609,11.717-26.294,18-55,4-18.3,7.726-29.99,12-30,
                        5-.011,8.835,15.964,12.136,30.034C60.284,144.768,65.146,164.989,70,165c4.886,0.011,
                        9.84-20.16,18-55,3.338-14.251,7.067-30,12-30,4.811,0,8.424,14.981,12,30,5.938,24.938,13.511,
                        55.363,18,55,3.043-.246,5.741-14.729,10.376-34.92C141.153,126.7,142.8,120.012,145,
                        120c2.182-.012,3.893,6.535,4.755,10.1C153.593,146,157.624,165.033,160,165c2.307-.032,
                        5.579-18.072,9.919-34.924C170.9,126.278,172.7,119.994,175,120s4.076,6.343,5,10c4.06,16.078,
                        7.757,35,10,35s5.905-18.859,10-35c0.934-3.68,2.7-10,5-10,1.829,0,3.417,4.012,5,10,4.683,
                        17.71,3.05,31.1,10,35,2.661,1.494,6.086,1.353,10,0"
                    transform="translate(0 -79.5)"
                  />
                </svg>
              </EnigmaBody>
            </Content>
            <AdRight>
              <h2>Ad right</h2>
            </AdRight>
          </Container>
          <Footer destiny="3" />
        </Body>
      </main>
    </div>
  )
}

export default Enigma2
