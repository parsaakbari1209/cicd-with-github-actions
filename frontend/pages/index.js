import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  background-color: #31394C;
  color: #FDFDFD;
  display: flex;
  font-family: sans-serif;
  font-size: 28px;
  font-weight: 700;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="CI/CD with GitHub Actions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <p>CI/CD with GitHub Actions Demo! Successful</p>
      </Container>
    </>
  )
}

export default Home
