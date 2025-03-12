import CustomNavbar from './component/Navbar.jsx';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PythonGuide from "./pages/Guide/PythoneGuide.jsx";
import PythoneEsercizi from "./pages/Esercizi/PythoneEsercizi.jsx";
import JavaScriptGuide from "./pages/Guide/JavaScriptGuide.jsx";
import Esercizi from "./pages/Esercizi.jsx";

function App() {
    return (
        <Router>
            <CustomNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/python" element={<PythonGuide />} />
                <Route path="/javascript" element={<JavaScriptGuide />} />
                <Route path="/pythoneEsercizi" element={<PythoneEsercizi />} />
                <Route path="/esercizi" element={<Esercizi />} />
                {/* Aggiungi altre rotte qui */}
            </Routes>
        </Router>
    );
}

export default App;
