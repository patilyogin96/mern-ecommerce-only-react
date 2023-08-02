import React, { Children } from "react";
import Drawer from "@mui/material/Drawer";
import styles from "./index.module.css";

const CustomDrawer = ({
  anchor,
  open,
  onClose,
  component,
  children,
  width = "35%",
}) => {
  return (
    <Drawer
      PaperProps={{
        sx: { width: width },
      }}
      anchor={anchor}
      open={open}
      onClose={onClose}
    >
      {/* {list(anchor)} */}
      {/* {component} */}
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
