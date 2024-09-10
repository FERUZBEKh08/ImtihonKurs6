import "./App.jsx"

import { NavLink } from "react-router-dom"

import logo from "./img/logo (2).png"

export default function logoTop() {
  return (
    <div className="logoTop">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>
    </div>
  )
}
