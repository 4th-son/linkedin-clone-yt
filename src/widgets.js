import "./widgets.css";
import React from "react";
import { Avatar } from "@mui/material";
import bgi from "./images/background image.jpg";
import AddIcon from "@mui/icons-material/Add";

export function Users() {
  return (
    <div className="widgets">
      <Avatar src={bgi} className="widgets_avatar" />
      <div className=" details">
        <h4>Michael ogozi</h4>
        <h5>michealogozi@gmail.com</h5>
        <button className="follow_btn">
          <AddIcon /> Follow
        </button>
      </div>
    </div>
  );
}

function widgets() {
  return (
    <div>
      <Users />
      <Users />
      <Users />
    </div>
  );
}

export default widgets;
