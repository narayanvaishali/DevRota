import React from 'react';
import Register from '../../components/Register';
import Layout from '../Layout';

const LoginIndex = () => (
  <Layout>
    <Register
        titleText="Dev Rota"
        subtitleText={<span>Register and Login to see it in action</span>}
        primaryBtnText="Login"
        primaryBtnLink="/login" />
   </Layout>

);

export default LoginIndex;