import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import Editor from "@monaco-editor/react";

const Exercises = () => {
    const languages = [
        { id: 'python', name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
        { id: 'javascript', name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { id: 'html', name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
        { id: 'css', name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    ];

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Scegli un Linguaggio per gli Esercizi</h1>
            <Row>
                {languages.map((lang) => (
                    <Col key={lang.id} md={3} className="mb-4">
                        {/* Link alla pagina degli esercizi specifica per il linguaggio */}
                        <Link to={`/exercises/${lang.id}`} style={{ textDecoration: 'none' }}>
                            <Card className="shadow-sm text-center">
                                {/* Logo del linguaggio */}
                                <Card.Img variant="top" src={lang.logo} style={{ height: '100px', objectFit: 'contain', padding: '10px' }} />
                                <Card.Body>
                                    {/* Nome del linguaggio */}
                                    <Card.Title>{lang.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Exercises;
