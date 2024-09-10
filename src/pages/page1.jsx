import "../App.css";

import map from "../img/map-embed (1).png"

import logo from "../img/logo (2).png"

//swiper

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function page1() {
  return (
    <div className="page1">
      <article className="one">
        <Swiper className="mySwiper">
          <SwiperSlide className="swiperPageOne">
            <div className="inSwiper">
              <article>
                <h1>11 горнолыжных трасс</h1>

                <p>
                  Наш горнолыжный курорт оснащен современными подъемниками,
                  которые, по словам посетителей, всегда работают стабильно и
                  без нареканий.
                </p>
              </article>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperPageOne">
            <div className="inSwiper">
              <article>
                <h1>11 горнолыжных трасс</h1>

                <p>
                  Наш горнолыжный курорт оснащен современными подъемниками,
                  которые, по словам посетителей, всегда работают стабильно и
                  без нареканий.
                </p>
              </article>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperPageOne">
            <div className="inSwiper">
              <article>
                <h1>11 горнолыжных трасс</h1>

                <p>
                  Наш горнолыжный курорт оснащен современными подъемниками,
                  которые, по словам посетителей, всегда работают стабильно и
                  без нареканий.
                </p>
              </article>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperPageOne">
            <div className="inSwiper">
              <article>
                <h1>11 горнолыжных трасс</h1>

                <p>
                  Наш горнолыжный курорт оснащен современными подъемниками,
                  которые, по словам посетителей, всегда работают стабильно и
                  без нареканий.
                </p>
              </article>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>

      <article className="two">
        <Swiper className="mySwiper">
          <SwiperSlide className="swiperPageOne">
            <div className="inSwiper">
              <article>
                <h1>4 фрирайд зоны</h1>

                <p>
                  Не нравятся лыжи или сноуборд? На «Такмане» вы сможете
                  попробовать другие виды зимнего отдыха.
                </p>

                <button className="btn2">Подробнее</button>
              </article>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperPageOne">
            <div className="inSwiper">
              <article>
                <h1>4 фрирайд зоны</h1>

                <p>
                  Не нравятся лыжи или сноуборд? На «Такмане» вы сможете
                  попробовать другие виды зимнего отдыха.
                </p>

                <button className="btn2">Подробнее</button>
              </article>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperPageOne">
            <div className="inSwiper">
              <article>
                <h1>4 фрирайд зоны</h1>

                <p>
                  Не нравятся лыжи или сноуборд? На «Такмане» вы сможете
                  попробовать другие виды зимнего отдыха.
                </p>

                <button className="btn2">Подробнее</button>
              </article>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperPageOne">
            <div className="inSwiper">
              <article>
                <h1>4 фрирайд зоны</h1>

                <p>
                  Не нравятся лыжи или сноуборд? На «Такмане» вы сможете
                  попробовать другие виды зимнего отдыха.
                </p>

                <button className="btn2">Подробнее</button>
              </article>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>

      <article className="three">
        <div className="top">
          <article>
            <h1>Ски-пасс на весь сезон</h1>

            <p>
              Если покупать ски-пасс сразу на весь сезон, можно здорово
              сэкономить!
            </p>

            <button className="btn2">Купить/Пополнить</button>
          </article>
        </div>

        <div className="bottom">
        <article className="one">
            <div className="inOne">
              <article>
                <h1>Крупнейший сноупарк в Пермском крае</h1>

                <p>
                  Наш горнолыжный курорт оснащен современными подъемниками,
                  которые, по словам посетителей, всегда работают стабильно и
                  без нареканий.
                </p>
              </article>
            </div>
      </article>
        </div>
      </article>

      <article className="four">
      <div className="bottom">
        <article className="one">
            <div className="inOne">
              <article>
                <h1>Крупнейший сноупарк в Пермском крае</h1>

                <p>
                  Наш горнолыжный курорт оснащен современными подъемниками,
                  которые, по словам посетителей, всегда работают стабильно и
                  без нареканий.
                </p>

                <button className="btn2">Афиша</button>
              </article>
            </div>
      </article>
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
