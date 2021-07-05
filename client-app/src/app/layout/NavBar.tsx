import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NavBar() {
  const { activityStore } = useStore();

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '20px' }}
          />
        </Menu.Item>
        <Menu.Item name='Harmony Cloud' />
        <Menu.Item>
          <Button
            onClick={() => activityStore.openForm()}
            positive
            content='Activity Oluşturun'
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
