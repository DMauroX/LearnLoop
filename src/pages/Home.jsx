import { Container, Card } from 'react-bootstrap';
import {Route} from "react-router-dom";
import PythonGuide from "./Guide/PythoneGuide.jsx";
import JavaScriptGuide from "./Guide/JavaScriptGuide.jsx";

const Home = () => {
    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title>Benvenuto su Learn Programming!</Card.Title>
                    <Card.Text>
                        Esplora le guide e pratica con gli esercizi per imparare a programmare.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;
