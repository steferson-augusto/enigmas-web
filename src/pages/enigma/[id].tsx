import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import { findAll, findById } from '../api/answer'

import {
  Container,
  Content,
  AdTop,
  AdRight,
  Body,
  EnigmaText,
  EnigmaImage
} from '../../styles/components'
import Footer from '../../styles/components/Footer'
import { AppProps } from 'next/dist/next-server/lib/router/router'

export default function Enigma({ enigma }: AppProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>{enigma.title}</title>
      </Head>

      <main>
        <Body>
          <AdTop>
            <h2>Ad top</h2>
          </AdTop>
          <Container>
            <Content>
              <EnigmaText>{enigma.text}</EnigmaText>
              <EnigmaImage src={`/images/${enigma.image}`} width="100%" />
            </Content>
            <AdRight>
              <h2>Ad right</h2>
            </AdRight>
          </Container>
          <Footer id={enigma._id} destiny={enigma.destiny} />
        </Body>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const enigmas = findAll()
  const paths = (await (await enigmas).toArray()).map(enigma => ({
    params: { id: enigma._id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params

  const enigma = await findById(id as string)

  enigma._id = enigma._id.toString()
  delete enigma.answer

  return {
    props: {
      enigma: enigma
    }
  }
}
