import { Card, Button } from "react-bootstrap";

export default function Projects() {
  return (
    <div id="projects">
      <div className="cards">
        <Card className="card">
          <Card.Img variant='top' src='/copycash.gif' />
          <Card.Body>
            <Card.Title>Trader para IQ Option</Card.Title>
            <Card.Text>
                Em tempo real você pode enviar operações para os usuários cadastrados.
            </Card.Text>
            <Button className='button' >Read the docs!</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant='top' src='/copycash.gif' />
          <Card.Body>
            <Card.Title>React Native E-commerce</Card.Title>
            <Card.Text>
                Landing view para E-commerce em React Native e mSQL.
            </Card.Text>
            <Button className='button' >Read the docs!</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
