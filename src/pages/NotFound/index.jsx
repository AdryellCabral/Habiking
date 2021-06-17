import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <h2>Página Não Encontrada.</h2>
      <Link to='/'>Retorne à Página Inicial.</Link>
    </Container>
  );
}

export default NotFound;
