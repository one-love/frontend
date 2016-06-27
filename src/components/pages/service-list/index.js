import React from 'react';
import Service from '../../molecules/service';
import List from '../../layouts/list';


export default function ServiceList() {
  return (
    <List title="Services" service="active">
      <Service name="One Love" />
      <Service name="Liberator" />
      <Service name="Compose" />
    </List>
  );
}
