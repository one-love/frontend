import React from 'react';
import Application from '../../molecules/application';
import List from '../../layouts/list';


export default function ApplicationList() {
  return (
    <List title="Applications" service="active">
      <Application name="Docker" />
      <Application name="Flask" />
      <Application name="React" />
    </List>
  );
}
