import React from 'react';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import '../style.scss';

export default () => (
  <div>
    <Header cluster="active"/>
    <div className="content">
      <h1>Cluster</h1>
      <div className="cluster">
        <div className="cluster_data">
          <div className="cluster_data_label">
            username:
          </div>
          <div className="cluster_data_item">
            admin@example.com
          </div>
        </div>
        <div className="cluster_data">
          <div className="cluster_data_label">
            ssh key:
          </div>
          <div className="cluster_data_item">
            tandara mandara
          </div>
        </div>
        <div className="cluster_data">
          <div className="cluster_data_label">
            providers:
          </div>
          <div className="cluster_data_item">
            <select>
              <option value="cluster name">cicvara popara</option>
              <option value="something">gurabija</option>
            </select>
          </div>
        </div>
        <div className="cluster_data">
          <div className="cluster_data_label">
            roles:
          </div>
          <div className="cluster_data_item">
            <select>
              <option value="some">op čop</option>
              <option value="thing">antilop</option>
            </select>
          </div>
        </div>
        <div className="cluster_data">
          <div className="cluster_data_label">
            services:
          </div>
          <div className="cluster_data_item">
            <select>
              <option value="some">bandaranaik</option>
              <option value="thing">trokraka udica</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
