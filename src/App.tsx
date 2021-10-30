import React from 'react';
import { Layout } from 'antd';
import Router from './components/Router';
import MenuComponent from './components/Menu';
const { Header, Content, Footer } = Layout;
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Layout>
      <Header>
        <div />
        <MenuComponent />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '24px' }}>
        <Layout style={{ padding: '24px 0', backgroundColor: '#ffffff' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <ErrorBoundary>
              <Router />
            </ErrorBoundary>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Real Estate App ©2021 Created by Musatov Yuriy
      </Footer>
    </Layout>
  );
};

export default App;
