import React from 'react';

import Layout from './Layout';
import Shift from '../containers/Shift';

const Dashboard = () => (
  <Layout drawer="true">
    <h1>Hello Dev Rota</h1>
    <Shift user="VP" date="20181215" shift="AM">
      {({ loading, error, data }) => {
        if (loading) return 'Loading....';

        if (error) {
          return <pre>{JSON.stringify(error, null, 2)}</pre>;
        }
        return <h1>{data}</h1>;
      } }
    </Shift>

    <Shift user="VP" date="20181216" shift="AM">
      {({ loading, error, data }) => {
        if (loading) return 'Loading....';

        if (error) {
          return <pre>{JSON.stringify(error, null, 2)}</pre>;
        }
        return <h1>{data}</h1>;
      } }
    </Shift>

  </Layout>
);

export default Dashboard;
