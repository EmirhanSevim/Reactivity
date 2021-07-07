import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';

export default function HomePage() {
  return (
    <Container style={{ marginTop: '7em' }}>
      <h1> -Ana Sayfa-</h1>
      <Button>
        Go to <Link to='/activities'>Activities</Link>
      </Button>
    </Container>
  );
}
