import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";

const Stat = ({ icon, className, children }) => {
  return (
    <div className={`stat-rate ${className}`}>
      <SvgIcon component={icon} />
      {children}
    </div>
  );
};
export default Stat;
