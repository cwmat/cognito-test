import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
            </Routes>
            <Authenticator>
                {({ signOut, user }) => (
                    <div>
                        <p>Welcome {user.username}</p>
                        <button onClick={signOut}>Sign out</button>
                    </div>
                )}
            </Authenticator>
      </Layout>
    );
  }
}
