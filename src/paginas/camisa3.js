import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Camisa3() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Figure>
            <Figure.Image
              width={400}
              height={450}
              alt="400x450"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgkSQpyvkmlbo-onuPNr24tfzAT5u3LpeH2VHx8Sf_1dN9J_bw"
            />
          </Figure>
        </Col>

        <Col xs={6}>
          <Figure>
            <Figure.Caption className="custom-caption">
              <h2 className="custom-title">DAZY Camiseta De Malha Canelada Com Meio Botão</h2>
              <p className="custom-price">Valor: R$53.000,00</p>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4YnZVqccTO83r2m3Hef2xORB8sbUD_QJjW7CiaI8N8TXUgPC"
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Camisa3;
