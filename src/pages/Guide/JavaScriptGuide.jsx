import { Container, Card } from 'react-bootstrap';

const JavaScriptGuide = () => {
    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title>Guida a JavaScript</Card.Title>
                    <Card.Text>
                        JavaScript è un linguaggio di programmazione ampiamente utilizzato per lo sviluppo web...
                    </Card.Text>
                    <pre>
            <code>console.log("Ciao, mondo!");</code>
          </pre>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default JavaScriptGuide;
