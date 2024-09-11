import twoImg from "../img/inPageOneTwoImg.png";

import insta from "../img/icon-ig.png"
import vk from "../img/icon-vk.png"

import map from "../img/map-embed (1).png";

import logo from "../img/logo (2).png";



export default function inMainPage() {
  return (
    <div className="inMainPage">
      <div className="one">
        <article>
          <h1>Наши мероприятия</h1>
          <p>Каждые выходные — события! Приходите, будет интересно!</p>
        </article>
      </div>

      <div className="two">
        <img src={twoImg} alt="" />
        <article>
          <h1>Apress ski</h1>
          <p>
            Горнолыжный курорт «Такман» — место отдыха, которое идеально
            подходит для выходных в компании друзей или семьи. Здесь есть все
            условия, необходимые для комфортного отдыха — оборудованные
            горнолыжные склоны, спортивный инвентарь, бани, развлекательные
            комнаты и панорамное кафе.{" "}
          </p>

          <div>
            <a href="https://instagram.com" target="_blank">
                <img src={insta} alt="" />  
            </a>

            <a href="https://vk.com" target="_blank">
            <img src={vk} alt="" />
            </a>
          </div>
        </article>
      </div>

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
