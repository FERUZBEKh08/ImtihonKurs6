import "./App.css";



import { NavLink } from "react-router-dom";

import logo from "./img/logo (2).png";
import vkLogo from "./img/vk-icon-white.png";
import whatsAppLogo from "./img/whatsapp-icon-white.png";
import instaLogo from "./img/instagram-icon-white.png";

export default function navbar() {
  return (
    <nav>
      <article className="navLeft">
        <NavLink to="/" activeClassName="active">
          <img src={logo} alt="" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/page1" activeClassName="active">
              Катание
            </NavLink>
          </li>
          <li>
            <NavLink to="/page2" activeClassName="active">
              Проживание
            </NavLink>
          </li>
          <li>
            <NavLink to="/page3" activeClassName="active">
              Услуги
            </NavLink>
          </li>
          <li>
            <NavLink to="/page4" activeClassName="active">
              Цены
            </NavLink>
          </li>
          <li>
            <NavLink to="/page5" activeClassName="active">
              Как добраться
            </NavLink>
          </li>
          <li>
            <NavLink to="/page6" activeClassName="active">
              Информация
            </NavLink>
          </li>
          <span className="styleBox"></span>
        </ul>
      </article>

      <article className="navRight">
        <div className="one">
          <img src={vkLogo} alt="" />
          <img src={whatsAppLogo} alt="" />
          <img src={instaLogo} alt="" />
        </div>
        <button className="btn1">Купить онлайн</button>
      </article>
    </nav>
  );
}
