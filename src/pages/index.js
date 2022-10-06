import { Col, Container, Row } from 'react-bootstrap'
import Main from '../components/Main/main'
export default function Home({data}) {

  return (
   
      <Container>
          <Row>
              <Col> <Main data={data}/></Col>   
          </Row>
      </Container>
   
  )
}

export const getStaticProps = async () => {

   const res = await fetch("https://restcountries.com/v2/all")
   const data = await res.json()

    return {
        props: {
            data
        }
    }
}