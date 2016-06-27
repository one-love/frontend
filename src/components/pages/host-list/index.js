import React from 'react';
import Host from '../../molecules/host';
import List from '../../layouts/list';


export default function HostList() {
  return (
    <List title="Hosts" cluster="active">
      <Host name="host_01" />
      <Host name="host_02" />
      <Host name="host_03" />
    </List>
  );
}
