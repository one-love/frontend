import React from 'react';
import Header from '../molecules/header';
import Footer from '../atoms/footer';

export default () => (
  <div>
    <Header service="active" />
    <div className="content">
      <h1>Service</h1>
      <div className="service">
        <div className="service_data">
          <div className="service_data_label">
            user:
          </div>
          <div className="service_data_item">
            admin@example.com
          </div>
        </div>
        <div className="service_data">
          <div className="service_data_label">
            roles:
          </div>
          <div className="service_data_item">
            <select>
              <option value="some">op čop</option>
              <option value="thing">antilop</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
