import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Camisa1() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Figure>
            <Figure.Image
              width={400}
              height={450}
              alt="400x450"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgxBzLmN4xfXM-rwNbWsWXCLCaqERvreZ7AA7aC9wAQO7ACcZ5"
            />
          </Figure>
        </Col>

        <Col xs={6}>
          <Figure>
            <Figure.Caption className="custom-caption">
              <h2 className="custom-title">SHEIN BASICS Top tank crop algodão sólido</h2>
              <p className="custom-price">Valor: R$3.000,00</p>
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
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrPHu5RbSPWlXlVA7yPPrAhthSJOoVNfkDKl2Yh9VBFLUSQ_US"
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Camisa1;
