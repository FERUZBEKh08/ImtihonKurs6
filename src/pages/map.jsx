import "../App.css"

import mapYandex from "../img/map-embed (1).png"
import mapTakman from "../img/abcd.png"

import logo from "../img/logo (2).png";

export default function map() {
  return (
    <div className="mapIn">
      <img className="imgOne" src={mapYandex} alt="" />
      <img className="imgTwo" src={mapTakman} alt="" />
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
  )
}
