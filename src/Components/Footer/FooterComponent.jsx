// src/Footer.tsx
import React from 'react';
import './FooterComponent.css'

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Contactez-nous</h3>
                    <form className="footer-form">
                        <input type="text" name="name" placeholder="Votre nom" required />
                        <input type="email" name="email" placeholder="Votre email" required />
                        <textarea name="message" rows="4" placeholder="Votre message" required></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
                <div className="footer-section">
                    <h3>Détails</h3>
                    <ul>
                        <li><a href="#">Carrières</a></li>
                        <li><a href="#">Notre café</a></li>
                        <li><a href="#">Actualités</a></li>
                        <li><a href="#">Foodservice</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Réseaux sociaux</h3>
                    <div className="social-icons" style={{ display: 'flex', justifyContent: 'space-around', fontSize: '24px' }}>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}><i className="fab fa-facebook-f"></i></a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}><i className="fab fa-twitter"></i></a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}><i className="fab fa-instagram"></i></a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}><i className="fab fa-pinterest"></i></a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

            </div>
            <div className="legal">
                <p>&copy; 2021 Votre Entreprise. Tous droits réservés.</p>
                <p>
                    <a href="#">Conditions d'utilisation</a> |
                    <a href="#">Politique de confidentialité</a> |
                    <a href="#">Accessibilité</a> |
                    <a href="#">Transparence en matière de chaînes d'approvisionnement</a>
                </p>
            </div>
        </footer >
    );
};

export default FooterComponent;
