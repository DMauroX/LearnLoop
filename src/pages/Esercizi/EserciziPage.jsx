import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ExercisePage = () => {
    const { language } = useParams(); // Ottiene il linguaggio dalla URL
    const [esercizi, setEsercizi] = useState([]); // Lista degli esercizi
    const [code, setCode] = useState(''); // Codice inserito dall'utente
    const [feedback, setFeedback] = useState(''); // Messaggio di feedback
    const [currentExercise, setCurrentExercise] = useState(null); // Esercizio corrente

    // Carica gli esercizi da Firestore
    useEffect(() => {
        const caricaEsercizi = async () => {
            const eserciziRef = doc(db, 'esercizi', language); // Riferimento al documento Firestore
            const eserciziDoc = await getDoc(eserciziRef); // Recupera il documento
            if (eserciziDoc.exists()) {
                setEsercizi(eserciziDoc.data().esercizi); // Imposta la lista degli esercizi
                setCurrentExercise(eserciziDoc.data().esercizi[0]); // Imposta il primo esercizio come predefinito
            }
        };
        caricaEsercizi();
    }, [language]);

    // Gestisce l'invio del codice
    const handleSubmit = () => {
        try {
            if (code.includes('print("Ciao, Mondo!")')) {
                setFeedback('Corretto! Ottimo lavoro!');
            } else {
                setFeedback('Il codice non è corretto. Riprova!');
            }
        } catch (error) {
            setFeedback(`Errore: ${error.message}`);
        }
    };

    return (
        <Container fluid className="mt-4 p-4">
            <Row>
                {/* Colonna sinistra: Esercizio */}
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>{currentExercise?.titolo}</Card.Title>
                            <Card.Text>{currentExercise?.descrizione}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Colonna destra: Editor di codice */}
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Editor
                                height="300px"
                                language={language} // Imposta il linguaggio dell'editor
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
                            {feedback && (
                                <Alert variant={feedback.includes('Corretto') ? 'success' : 'danger'} className="mt-3">
                                    {feedback}
                                </Alert>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default ExercisePage;
