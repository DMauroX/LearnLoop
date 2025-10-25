import { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
/*import { auth } from '../firebase';*/
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Salva dati aggiuntivi in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                punteggio: 0, // Punteggio iniziale
                createdAt: new Date(), // Data di registrazione
            });

            alert('Registrazione completata con successo!');
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit">Registrati</Button>
        </Form>
    );
};

export default Register;
