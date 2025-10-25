import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JavaScriptGuide = () => {
    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Guida Completa su JavaScript</h1>

            {/* Sezione: Variabili e Tipi di Dati */}
            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Card.Title>Variabili e Tipi di Dati</Card.Title>
                    <Card.Text>
                        Le variabili sono contenitori per memorizzare dati. In JavaScript, puoi dichiarare variabili usando `let`, `const` o `var`.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Esercizi:</strong>
                            <Link to="/exercises/javascript?topic=variables&difficulty=easy">
                                <Button variant="primary" className="ms-2">Facile</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=variables&difficulty=medium">
                                <Button variant="warning" className="ms-2">Medio</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=variables&difficulty=hard">
                                <Button variant="danger" className="ms-2">Difficile</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Sezione: Funzioni */}
            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Card.Title>Funzioni</Card.Title>
                    <Card.Text>
                        Le funzioni sono blocchi di codice riutilizzabili. Puoi dichiarare una funzione usando la parola chiave `function`.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Esercizi:</strong>
                            <Link to="/exercises/javascript?topic=functions&difficulty=easy">
                                <Button variant="primary" className="ms-2">Facile</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=functions&difficulty=medium">
                                <Button variant="warning" className="ms-2">Medio</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=functions&difficulty=hard">
                                <Button variant="danger" className="ms-2">Difficile</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Sezione: Oggetti */}
            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Card.Title>Oggetti</Card.Title>
                    <Card.Text>
                        Gli oggetti sono collezioni di proprietà, dove ogni proprietà è una coppia chiave-valore.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Esercizi:</strong>
                            <Link to="/exercises/javascript?topic=objects&difficulty=easy">
                                <Button variant="primary" className="ms-2">Facile</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=objects&difficulty=medium">
                                <Button variant="warning" className="ms-2">Medio</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=objects&difficulty=hard">
                                <Button variant="danger" className="ms-2">Difficile</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Sezione: Array */}
            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Card.Title>Array</Card.Title>
                    <Card.Text>
                        Gli array sono utilizzati per memorizzare più valori in una singola variabile.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Esercizi:</strong>
                            <Link to="/exercises/javascript?topic=arrays&difficulty=easy">
                                <Button variant="primary" className="ms-2">Facile</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=arrays&difficulty=medium">
                                <Button variant="warning" className="ms-2">Medio</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=arrays&difficulty=hard">
                                <Button variant="danger" className="ms-2">Difficile</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Sezione: DOM Manipulation */}
            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Card.Title>Manipolazione del DOM</Card.Title>
                    <Card.Text>
                        Il DOM (Document Object Model) rappresenta la struttura di una pagina web. JavaScript può essere usato per manipolare il DOM.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Esercizi:</strong>
                            <Link to="/exercises/javascript?topic=dom&difficulty=easy">
                                <Button variant="primary" className="ms-2">Facile</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=dom&difficulty=medium">
                                <Button variant="warning" className="ms-2">Medio</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=dom&difficulty=hard">
                                <Button variant="danger" className="ms-2">Difficile</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Sezione: Eventi */}
            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Card.Title>Eventi</Card.Title>
                    <Card.Text>
                        Gli eventi sono azioni o occorrenze che accadono nel browser, come clic, movimenti del mouse, pressioni di tasti, ecc.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Esercizi:</strong>
                            <Link to="/exercises/javascript?topic=events&difficulty=easy">
                                <Button variant="primary" className="ms-2">Facile</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=events&difficulty=medium">
                                <Button variant="warning" className="ms-2">Medio</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=events&difficulty=hard">
                                <Button variant="danger" className="ms-2">Difficile</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Sezione: Promesse */}
            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Card.Title>Promesse</Card.Title>
                    <Card.Text>
                        Le promesse sono utilizzate per gestire operazioni asincrone in JavaScript.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Esercizi:</strong>
                            <Link to="/exercises/javascript?topic=promises&difficulty=easy">
                                <Button variant="primary" className="ms-2">Facile</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=promises&difficulty=medium">
                                <Button variant="warning" className="ms-2">Medio</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=promises&difficulty=hard">
                                <Button variant="danger" className="ms-2">Difficile</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Sezione: Async/Await */}
            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Card.Title>Async/Await</Card.Title>
                    <Card.Text>
                        `async` e `await` sono zucchero sintattico per lavorare con le promesse in modo più leggibile.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Esercizi:</strong>
                            <Link to="/exercises/javascript?topic=async-await&difficulty=easy">
                                <Button variant="primary" className="ms-2">Facile</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=async-await&difficulty=medium">
                                <Button variant="warning" className="ms-2">Medio</Button>
                            </Link>
                            <Link to="/exercises/javascript?topic=async-await&difficulty=hard">
                                <Button variant="danger" className="ms-2">Difficile</Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default JavaScriptGuide;
