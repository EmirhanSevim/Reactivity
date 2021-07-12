import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../Features/Activities/Dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../Features/home/HomePage';
import ActivityForm from '../Features/Activities/Form/ActivityForm';
import ActivityDetails from '../Features/Activities/Details/ActivityDetails';
import TestErrors from '../Features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../Features/errors/NotFound';
import ServerError from '../Features/errors/ServerError';

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <ToastContainer position='bottom-right' hideProgressBar />
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/activities' component={ActivityDashboard} />
                <Route path='/activities/:id' component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={['/createActivity', '/manage/:id']}
                  component={ActivityForm}
                />
                <Route path='/errors' component={TestErrors} />
                <Route path='/server-error' component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
