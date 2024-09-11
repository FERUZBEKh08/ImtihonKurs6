import "../App.jsx";

import { NavLink } from "react-router-dom";

import map from "../img/map-embed (1).png"

import logo from "../img/logo (2).png"

import logoPdp from "../img/image 10.png";
import logoWorld from "../img/image 11.png";

export default function page5() {
  return (
    <div className="page5">
      <article className="one">
        <div className="top">
          <article className="one">
            <div className="inOne">
              <article>
                <h1>Крупнейший сноупарк в Пермском крае</h1>

                <p>
                  Наш горнолыжный курорт оснащен современными подъемниками,
                  которые, по словам посетителей, всегда работают стабильно и
                  без нареканий.
                </p>


                <NavLink to="/page5/in">
                <button className="btn2">Забронировать</button>
                </NavLink>
              </article>
            </div>
          </article>
        </div>
      </article>

      <article className="two">
        <h1>Туры на «Такман»</h1>

        <div className="box">
          <article>
            <h2>Электропоезд из Перми компанией ППК</h2>

            <p>
              Горнолыжный курорт «Такман» — место отдыха, которое идеально
              подходит для выходных в компании друзей или семьи. Здесь есть все
              условия, необходимые для комфортного отдыха — оборудованные
              горнолыжные склоны, спортивный инвентарь, бани, развлекательные
              комнаты и панорамное кафе. Горнолыжный курорт «Такман» — место
              отдыха, которое идеально подходит для выходных в компании друзей
              или семьи. Здесь есть все условия, необходимые для комфортного
              отдыха — оборудованные горнолыжные склоны, спортивный инвентарь,
              бани, развлекательные комнаты и панорамное кафе.
            </p>
          </article>
          <img src={logoPdp} alt="" />
        </div>

        <div className="box">
          <article>
            <h2>Тур из Перми </h2>

            <p>
              vk.com/transfer_na_takman <br /> Написать в WhatsApp Написать в
              Viber <br />
              +7 (992) 203-38-39
            </p>
          </article>
          <img src={logoWorld} alt="" />
        </div>

        <div className="box">
          <article>
            <h2>Электропоезд из Перми компанией ППК</h2>

            <p>
              Горнолыжный курорт «Такман» — место отдыха, которое идеально
              подходит для выходных в компании друзей или семьи. Здесь есть все
              условия, необходимые для комфортного отдыха — оборудованные
              горнолыжные склоны, спортивный инвентарь, бани, развлекательные
              комнаты и панорамное кафе. Горнолыжный курорт «Такман» — место
              отдыха, которое идеально подходит для выходных в компании друзей
              или семьи. Здесь есть все условия, необходимые для комфортного
              отдыха — оборудованные горнолыжные склоны, спортивный инвентарь,
              бани, развлекательные комнаты и панорамное кафе.
            </p>
          </article>
          <img src={logoPdp} alt="" />
        </div>
      </article>

      <article className="navbarBottom">
        <div className="top">
          <div className="box">
            <article>
            <h1>Как добраться</h1>
            <p>
              Скорый электропоезд Ласточка довезет Вас до Чусового,где
              производится пересадка на автобусный трансфер до Горнолыжного
              курорта Такман.
            </p>
            </article>
          </div>
          <div className="box">
            <article>
            <h1>График работы</h1>
            <p>
              Скорый электропоезд Ласточка довезет Вас до Чусового,где
              производится пересадка на автобусный трансфер до Горнолыжного
              курорта Такман.
            </p>
            </article>
          </div>
        </div>
        <div className="bottom">
          <img src={map} alt="" />
        </div>
        <div className="underBottom">
          <div className="box">
            <article>
            <img src={logo} alt="" />
            <p>
              Скорый электропоезд Ласточка довезет Вас до Чусового,где
              производится пересадка на автобусный трансфер до Горнолыжного
              курорта Такман.
            </p>
            </article>
          </div>
          <div className="box">
            <article>
            <h1>Контакты</h1>
            <p>
              Скорый электропоезд Ласточка довезет Вас до Чусового,где
              производится пересадка на автобусный трансфер до Горнолыжного
              курорта Такман.
            </p>
            </article>
          </div>
        </div>
      </article>
    </div>
  );
}
