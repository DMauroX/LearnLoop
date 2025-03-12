import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import Editor from '@monaco-editor/react';

const Exercises = () => {
    const [code, setCode] = useState('');

    const handleSubmit = () => {
        alert(`Codice eseguito: ${code}`);
    };

    return (
        <Container fluid className="mt-4 p-4">
            <Row>
                {/* Colonna sinistra: Esercizio */}
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Esercizio 1: Stampa "Ciao, Mondo!"</Card.Title>
                            <Card.Text>
                                Scrivi un programma che stampi "Ciao, Mondo!" nella console.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Colonna destra: Editor di codice */}
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Editor
                                height="300px"
                                language="python"
                                value={code}
                                onChange={(value) => setCode(value || '')}
                            />
                            <Button
                                variant="primary"
                                className="mt-3"
                                onClick={handleSubmit}
                                aria-label="Esegui codice"
                            >
                                Esegui
                            </Button>
                            <Button
                                variant="outline-secondary"
                                className="mt-3 ms-2"
                                onClick={() => setCode('')}
                                aria-label="Resetta codice"
                            >
                                Resetta
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Exercises;
