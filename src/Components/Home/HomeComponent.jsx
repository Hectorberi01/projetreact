import React, { useState,useEffect } from 'react';
import { Carousel, Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function HomeComponent() {
    const navigate = useNavigate();
    const [data, setData] = useState()
    const products = [
        {
            id: 1,
            title: 'Call of Duty: Black Ops 4',
            price: '$19.99',
            image: 'https://tse4.mm.bing.net/th?id=OIP.SJ1HO8jat4yEUiw9H7UnigHaEK&pid=Api&P=0&h=180',
            description: 'Exciting first-person shooter with multiplayer modes.',
        },
        {
            id: 2,
            title: 'Final Fantasy XIV',
            price: '$16.99',
            image: 'https://tse4.mm.bing.net/th?id=OIP.9LaFBTamH-SaMsJDn9Hq2wHaEK&pid=Api&P=0&h=180',
            description: 'Popular MMORPG with a rich storyline and characters.',
        },
        {
            id: 3,
            title: 'Absolver: Downfall',
            price: '$25.00',
            image: 'https://tse3.mm.bing.net/th?id=OIP.PcMp4ExKumb2q47mVzLAIgHaF3&pid=Api&P=0&h=180',
            description: 'Martial arts action game with cooperative gameplay.',
        },
        {
            id: 4,
            title: 'Dead by Daylight',
            price: '$16.50',
            image: 'https://tse3.mm.bing.net/th?id=OIP.8gyZHM9duVGicLde8oyD_gHaEK&pid=Api&P=0&h=180',
            description: 'Multiplayer horror game where players take on the role of killer or survivors.',
        },
        {
            id: 4,
            title: 'The Elder Scrolls V: Skyrim',
            price: '$18.00',
            image: 'https://tse1.mm.bing.net/th?id=OIP.PMj_Ng3v08psDnotnkJU4AHaDt&pid=Api&P=0&h=180',
            description: 'Epic fantasy role-playing game with vast open world.',
        },
        {
            id: 5,
            title: 'Battlefield 1',
            price: '$35.90',
            image: 'https://tse2.mm.bing.net/th?id=OIP.2zo-4vj3IIlQdo3rqvxQgQHaEK&pid=Api&P=0&h=180',
            description: 'First-person shooter set during World War I.',
        },
        {
            id: 6,
            title: 'Grand Theft Auto V',
            price: '$16.50',
            image: 'https://tse3.mm.bing.net/th?id=OIP._b2yu1FR9O5gCxDGYbmGEQHaEK&pid=Api&P=0&h=180',
            description: 'Open-world action-adventure game with a gripping storyline.',
        },
        {
            id: 7,
            title: 'Battlefield V',
            price: '$27.99',
            image: 'https://tse1.mm.bing.net/th?id=OIP.Z-QYOrjN_RD3lt-F6QnuSwHaEK&pid=Api&P=0&h=180',
            description: 'First-person shooter with large-scale battles set in World War II.',
        },
    ];

    const chunkArray = (arr, size) =>
        arr.length > size ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)] : [arr];

    const productChunks = chunkArray(products, 4);


    useEffect(() => {
        
    }, []);

    const handlerDetails = (item) => {
        console.log("hector")
        
        navigate(`/details`, { state: { product: { ...item } } });
    }

    return (
        <div style={{
            padding: '20px', fontFamily: 'Arial, sans-serif', width: '80%', margin: 'auto',
            boxShadow: '10px', backgroundColor: '#f2f2f2'
        }}>

            <header>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            alt="First slide"
                            style={{ height: '300px', objectFit: 'cover' }}
                            src="https://tse4.mm.bing.net/th?id=OIP.lWxUF1IJtcwoTKF5PTTVhQHaEK&pid=Api&P=0&h=180"
                        />
                        <Carousel.Caption>
                            <h3>Premier Slide</h3>
                            <p>Découvrez nos incroyables aventures d'escape game.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '300px', objectFit: 'cover' }}
                            src="https://tse2.mm.bing.net/th?id=OIP.EQ2d1ZqpaML1QGlGQovKEQAAAA&pid=Api&P=0&h=180"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Troisième Slide</h3>
                            <p>Réservez votre session dès aujourd'hui!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>

            <section style={{ marginTop: '20px', backgroundColor: '#959292' }}>
                <h2>Session d'Escape Game</h2>
                <p>
                    Venez découvrir notre incroyable escape game ! Vous aurez 60 minutes pour résoudre des énigmes et trouver des indices afin de vous échapper de la pièce.
                    Idéal pour les familles, les amis ou les collègues de travail.
                </p>
                <div style={{ marginTop: '10px' }}>
                    <h3>Comment ça marche :</h3>
                    <ul>
                        <li>Réservez votre session en ligne ou par téléphone.</li>
                        <li>Rendez-vous sur place 15 minutes avant l'heure de votre session pour les instructions.</li>
                        <li>Travaillez en équipe pour résoudre les énigmes et trouver la sortie.</li>
                        <li>Profitez de 60 minutes d'adrénaline et de plaisir.</li>
                    </ul>
                </div>

            </section>

            <section id="products" style={{ marginTop: '20px' }}>
                <h2>Nos Produits</h2>
                <Carousel>
                    {productChunks.map((productChunk, index) => (
                        <Carousel.Item key={index}>
                            <Row>
                                {productChunk.map((product, idx) => (
                                    <Col key={idx} sm={6} md={3}>
                                        <Card style={{ margin: '10px' }}>
                                            <Card.Img variant="top" src={product.image} style={{ height: '180px', objectFit: 'cover' }} />
                                            <Card.Body>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>{product.description}</Card.Text>
                                                <Card.Text><strong>{product.price}</strong></Card.Text>
                                                <Button variant="primary" onClick={handlerDetails((product))}>Voir les détails</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </section>

            <section style={{ marginTop: '20px' }}>
                <h2>Présentation de l'Entreprise</h2>
                <p>
                    Bienvenue chez [Nom de l'entreprise], votre destination de choix pour des aventures palpitantes et des expériences uniques.
                    Nous sommes spécialisés dans la création d'escape games immersifs qui défient votre esprit et stimulent votre créativité.
                    Notre mission est de fournir des expériences inoubliables à tous nos visiteurs.
                </p>
                <p>
                    Fondée en [Année de fondation], notre entreprise a rapidement gagné une réputation pour l'excellence de ses jeux et la qualité de son service clientèle.
                    Venez nous rejoindre et découvrez pourquoi nous sommes le premier choix pour les escape games dans la région.
                </p>
            </section>

            <section style={{ marginTop: '20px', backgroundColor: '#959292' }}>
                <h2>Informations de Contact</h2>
                <p>
                    Vous avez des questions ou souhaitez en savoir plus sur nos services ? N'hésitez pas à nous contacter.
                    Nous sommes là pour vous aider et répondre à toutes vos questions.
                </p>
                <ul>
                    <li><strong>Adresse :</strong> 123 Rue de l'Adventure, 75000 Paris, France</li>
                    <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
                    <li><strong>Email :</strong> contact@nomdelentreprise.com</li>
                    <li><strong>Heures d'ouverture :</strong> Lundi - Vendredi : 9h00 - 18h00</li>
                </ul>
            </section>
        </div>
    );
}

export default HomeComponent
