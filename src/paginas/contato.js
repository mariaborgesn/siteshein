import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contato() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Figure>
            <Figure.Image
              width={400}
              height={450}
              alt="400x450"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkOdBKZeytWZggSZSaS0Xa5N7x8KdaLQ6I1wBI5gifVbnxBHK2"
            />
          </Figure>
        </Col>

        <Col xs={6}>
          <Figure>
            <Figure.Caption className="custom-caption">
              <h2 className="custom-title">SHEIN BAE Gola Quadrada Lado Rugado Camiseta Crop</h2>
              <p className="custom-price">Valor: R$15.500,00</p>
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Figure>
            <Figure.Image
              width={400}
              height={450}
              alt="400x450"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhKUITqe90E_8t6PM7XthbQ1Tj62xuIZbOYyF1Qvb9G_ElKAZU"
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;
