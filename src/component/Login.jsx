import { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Accesso effettuato con successo!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Form onSubmit={handleLogin}>
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
            <Button type="submit">Accedi</Button>
        </Form>
    );
};

export default Login;
