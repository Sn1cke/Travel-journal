import React from "react";
import { Icon } from "@iconify/react";

export default function Navigation() {
  return (
    <div className="header">
      <Icon icon="carbon:earth-filled" className="nav-icon" height="24px" />
      <h3>my travel journal</h3>
    </div>
  );
}
