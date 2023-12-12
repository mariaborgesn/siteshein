import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function Home() {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.ltwebstatic.com/images3_ccc/2023/11/20/4b/170044683664ab7a32f673a040c277275b28bab818_thumbnail_2000x.webp"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.ltwebstatic.com/images3_ccc/2023/11/20/2c/1700446605e4b6e074129749278e8635cdcc1813d0.webp"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5></h5>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://img.ltwebstatic.com/images3_ccc/2023/11/06/7d/1699251282f5ecb20576653bd6327c18686d5bf869_thumbnail_2000x.webp"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5></h5>
                    <p>
                        
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

                <Container className="d-flex justify-content-between">
      <Card style={{ width: '18rem', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGqRXrmDD6aZINnxLqFfcB7IEoylMwcS1LvVr053a7iXTO6zy" />
        <Card.Body>
          <Card.Title>Curvada Top Tank</Card.Title>
          <Button href='/camisa1' variant="outline-danger">Saiba mais</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkOdBKZeytWZggSZSaS0Xa5N7x8KdaLQ6I1wBI5gifVbnxBHK2" />
        <Card.Body>
          <Card.Title> Camiseta Crop</Card.Title>
          <Button href='/contato' variant="outline-danger">Saiba mais</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginLeft: '30px', marginTop: '30px', marginBottom: '30px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1J-fQZYPSTqYLwAnFHxdtXFEIBv0fn7bpEjxNrUTqqCD8Rl6D" />
        <Card.Body>
          <Card.Title>Camisa Canelada</Card.Title>
          <Button href='/camisa3' variant="outline-danger">Saiba mais</Button>
        </Card.Body>
      </Card>
    </Container>S
        </div>
    )
      
    
}

export default Home;