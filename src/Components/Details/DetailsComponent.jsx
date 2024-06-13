
function DetailsComponent(item) {
    return (
        <div>

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
            <h1>Details</h1>
            <h1>{item.id}</h1>
        </div>

    );
}

export default DetailsComponent