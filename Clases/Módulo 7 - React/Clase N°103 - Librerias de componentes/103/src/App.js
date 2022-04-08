import SeccionPrincipal from "./Components/SeccionPrincipal";
import { useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState(2);
  const [colorDelBoton, setColorDelBoton] = useState("primary");

  const mostrarEnConsola = () => {
    console.log("mouse enter")
  }

  return (
    <div>
      <SeccionPrincipal />

      <Typography variant="h1" component="span">
        Holis
      </Typography>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>

      <Rating value={2} />
      <div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>

      {/* Boton de material */}

      <Button
        variant="contained"
        onClick={handleClick}
        onMouseEnter={mostrarEnConsola}
        color={colorDelBoton}
        size="small"
      >
        Text
      </Button>
    </div>
  );
};

export default App;
