import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import ListAltIcon from "@mui/icons-material/ListAlt";
import TaskIcon from "@mui/icons-material/Task";
import "../styles/navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  return (
    <Box className="navigation">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(`/${newValue}`);
        }}
      >
        <BottomNavigationAction
          label="Create task"
          value=""
          icon={<TaskIcon />}
        />
        <BottomNavigationAction
          label="Task List"
          value="list"
          icon={<ListAltIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Navigation;
