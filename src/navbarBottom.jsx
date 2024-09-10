import "./App.jsx";

import "./script.js"

import { NavLink } from "react-router-dom";

import Skate from "./img/ice-skate.png";
import Hotel from "./img/hotel.png";
import Support from "./img/support.png";
import Presing from "./img/price-tag.png";
import Get from "./img/get-dressed.png";
import Information from "./img/information.png";

export default function navbarBottomMobile() {
  return (
    <div className="navbarBottomMobile" id="navbar">
      <div>
        <article>
          <NavLink to="/page1" activeClassName="active">
            <span></span>
            <img src={Skate} alt="" />
            <p>Катание</p>
          </NavLink>
        </article>

        <article>
          <NavLink to="/page2" activeClassName="active">
            <span></span>
            <img src={Hotel} alt="" />
            <p>Проживание</p>
          </NavLink>
        </article>

        <article>
          <NavLink to="/page3" activeClassName="active">
            <span></span>
            <img src={Support} alt="" />
            <p>Услуги</p>
          </NavLink>
        </article>

        <article>
          <NavLink to="/page4" activeClassName="active">
            <span></span>
            <img src={Presing} alt="" />
            <p>Цены</p>
          </NavLink>
        </article>

        <article>
          <NavLink to="/page5" activeClassName="active">
            <span></span>
            <img src={Get} alt="" />
            <p>Как добраться</p>
          </NavLink>
        </article>

        <article>
          <NavLink to="/page6" activeClassName="active">
            <span></span>
            <img src={Information} alt="" />
            <p>Информац</p>
          </NavLink>
        </article>
      </div>
    </div>
  );
}
