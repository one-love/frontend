import React from 'react';
import Header from '../atoms/header';
import Footer from '../atoms/footer';
import '../style.scss';

export default () => (
  <div>
    <Header cluster="true"/>
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
              <option velue="cluster name">cicvara popara</option>
              <option velue="something">gurabija</option>
            </select>
          </div>
        </div>
        <div className="cluster_data">
          <div className="cluster_data_label">
            roles:
          </div>
          <div className="cluster_data_item">
            <select>
              <option velue="some">op čop</option>
              <option velue="thing">antilop</option>
            </select>
          </div>
        </div>
        <div className="cluster_data">
          <div className="cluster_data_label">
            services:
          </div>
          <div className="cluster_data_item">
            <select>
              <option velue="some">bandaranaik</option>
              <option velue="thing">trokraka udica</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
