import React from 'react';
import { Link } from 'react-router';
import Header from '../molecules/header';
import Footer from '../atoms/footer';

export default () => (
  <div>
    <Header provision="true" />
    <div className="content">
      <h1>Provision</h1>
      <div className="provision">
        <div className="provision_data">
          <div className="provision_data_label">
            status:
          </div>
          <div className="provision_data_item">
            RUNNING
          </div>
        </div>
        <div className="provision_data">
          <div className="provision_data_label">
            user:
          </div>
          <div className="provision_data_item">
            admin@example.com
          </div>
        </div>
        <div className="provision_data">
          <div className="provision_data_label">
            cluster:
          </div>
          <div className="provision_data_item">
            <Link to="/cluster/id">cluster</Link>
          </div>
        </div>
        <div className="provision_data">
          <div className="provision_data_label">
            service:
          </div>
          <div className="provision_data_item">
            <Link to="/service/id">service</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
