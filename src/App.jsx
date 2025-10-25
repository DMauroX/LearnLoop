import React, { useState } from "react";
import "./App.css";

const initialPrizes = [
    { id: 1, value: "0 €", color: "blue" },
    { id: 2, value: "1 CENTESIMO", color: "blue" },
    { id: 3, value: "BICCHIERE D'ACQUA", color: "blue" },
    { id: 4, value: "CARAMELLA", color: "blue" },
    { id: 5, value: "UNA MELA", color: "blue" },
    { id: 6, value: "CAFFE QUATRA", color: "blue" },
    { id: 7, value: "UNA PENNA", color: "blue" },
    { id: 8, value: "NUTELLA", color: "blue" },
    { id: 9, value: "CREAMA CORPO", color: "blue" },
    { id: 10, value: "GATTO NUOVO", color: "blue" },
    { id: 11, value: "GRATTA E VINCI (5 EURO)", color: "red" },
    { id: 12, value: "LIBRO A SCELTA", color: "red" },
    { id: 13, value: "BOTTIGLIS DI PROSECCO", color: "red" },
    { id: 14, value: "CANDELA", color: "red" },
    { id: 15, value: "PROFUMO", color: "red" },
    { id: 16, value: "BORSA", color: "red" },
    { id: 17, value: "SCARPE NUOVE", color: "red" },
    { id: 18, value: "BATTERIA DI PENTOLE", color: "red" },
    { id: 19, value: "OCCHIALI DA SOLE", color: "red" },
    { id: 20, value: "SPA X 2 PERSONE", color: "red" },
];

const App = () => {
    const [prizes, setPrizes] = useState(initialPrizes);
    const [removedPrize, setRemovedPrize] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // Stato per il pop-up
    const [popupPrize, setPopupPrize] = useState(""); // Premio da mostrare nel pop-up

    const removePrize = (id) => {
        setRemovedPrize(id);

        setTimeout(() => {
            setPrizes((prevPrizes) => prevPrizes.filter((prize) => prize.id !== id));
            setRemovedPrize(null);
        }, 500);
    };

    const handleClickPrize20 = (prize) => {
        // Quando si clicca il premio numero 20
        setPopupPrize(prize.value); // Imposta il nome del premio nel pop-up
        setShowPopup(true); // Mostra il pop-up
    };

    return (
        <div className="container-fluid text-center mt-5">
            <h1 className="title">Affari di Rossella</h1>
            <div className="row mt-4">
                {/* Colonna sinistra */}
                <div className="col-3 d-flex flex-column align-items-start">
                    {prizes
                        .filter((prize) => prize.color === "blue")
                        .map((prize) => (
                            <button
                                key={prize.id}
                                className={`btn btn-primary w-100 mb-2 prize-button ${
                                    removedPrize === prize.id ? "removed-left" : ""
                                }`}
                                onClick={() => removePrize(prize.id)}
                                disabled={removedPrize === prize.id}
                            >
                                {prize.value}
                            </button>
                        ))}
                </div>

                {/* Colonna centrale con pulsante oro */}
                <div className="col-6">
                    <button className="button-oro">
                       {/* CAMBIO*/}
                        {/*OFFERTA*/}
                        

                    </button>
                </div>

                {/* Colonna destra */}
                <div className="col-3 d-flex flex-column align-items-end">
                    {prizes
                        .filter((prize) => prize.color === "red")
                        .map((prize) => (
                            <button
                                key={prize.id}
                                className={`btn btn-danger w-100 mb-2 prize-button ${
                                    removedPrize === prize.id ? "removed-right" : ""
                                }`}
                                onClick={() => {
                                    if (prize.id === 20) {
                                        handleClickPrize20(prize); // Mostra il pop-up se è il premio 20
                                    } else {
                                        removePrize(prize.id);
                                    }
                                }}
                                disabled={removedPrize === prize.id}
                            >
                                {prize.value}
                            </button>
                        ))}
                </div>
            </div>

            {/* Pop-up che appare quando si clicca il premio numero 20 */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2 style={{ color: "white" }}>Hai vinto!</h2>
                        <p style={{ color: "white" }}>{popupPrize}</p>
                        <button onClick={() => setShowPopup(false)} className="btn-close">
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
