import { Container, Card } from 'react-bootstrap';

const PythonGuide = () => {
    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title>Guida a Python</Card.Title>
                    <Card.Text>
                        Python è un linguaggio di programmazione ad alto livello...
                    </Card.Text>
                    <pre>
            <code>print("Ciao, mondo!")</code>
          </pre>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PythonGuide;
