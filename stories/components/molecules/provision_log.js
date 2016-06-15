import React from 'react';

export default (props) => {
  return (
    <div className="provisions">
      <div className="ok">[192.168.33.34] setup </div>
      <div className="ok">[192.168.33.34] onelove-roles.common : dummy task </div>
      <div className="ok">[192.168.33.34] onelove-roles.common : pause </div>
      <div className="ok">[192.168.33.34] onelove-roles.common : dump task </div>
      <div className="failed">[192.168.33.34] onelove-roles.common : pause </div>
      <div className="failed">[192.168.33.34] onelove-roles.common : date </div>
      <div className="failed">[192.168.33.34] onelove-roles.common : pause </div>
    </div>
  );
}
