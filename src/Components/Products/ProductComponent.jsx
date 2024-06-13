// src/components/ProductCard.tsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  flex: 1 1 calc(25% - 2rem);
  max-width: calc(25% - 2rem);

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    margin: 1rem;
  }

  p {
    margin: 0 1rem 1rem;
  }
`;

function ProductCard({ title, price, image,details }){
  return (
    <Card>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{details}</p>
    </Card>
  );
};

export default ProductCard;
