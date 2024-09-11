import "../App";

//Navlink

import { NavLink } from "react-router-dom";

import map from "../img/map-embed (1).png";

import logo from "../img/logo (2).png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function page3() {
  return (
    <div className="page3">
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
              </article>
            </div>
          </article>
        </div>
        <div className="bottom">
          <article>
            <h1>Инструкторы</h1>

            <p>
              Если покупать ски-пасс сразу на весь сезон, можно здорово
              сэкономить!
            </p>

            <NavLink to="/page3/star">
              <button className="btn2">Купить/Пополнить</button>
            </NavLink>
          </article>
        </div>
      </article>

      <article className="two">
        <div className="bottom">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article className="article"></article>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="top">
          <h1>Ски-пасс на весь сезон</h1>

          <p>
            Весь спектр услуг от проката инвентаря до катания на снегоходах!
          </p>

          <NavLink to="/page3/star">
            <button className="btn2">Подробнее</button>
          </NavLink>
        </div>
      </article>

      <article className="three">
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
                  <NavLink to="/page3/star">
                    <button className="btn2">Подробнее</button>
                  </NavLink>
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
                  <NavLink to="/page3/star">
                    <button className="btn2">Подробнее</button>
                  </NavLink>
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
                  <NavLink to="/page3/star">
                    <button className="btn2">Подробнее</button>
                  </NavLink>
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
                  <NavLink to="/page3/star">
                    <button className="btn2">Подробнее</button>
                  </NavLink>
                </article>
              </div>
            </SwiperSlide>
          </Swiper>
        </article>
      </article>

      <article className="four">
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
                  <NavLink to="/page3/star">
                    <button className="btn2">Подробнее</button>
                  </NavLink>
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
                  <NavLink to="/page3/star">
                    <button className="btn2">Подробнее</button>
                  </NavLink>
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
                  <NavLink to="/page3/star">
                    <button className="btn2">Подробнее</button>
                  </NavLink>
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
                  <NavLink to="/page3/star">
                    <button className="btn2">Подробнее</button>
                  </NavLink>
                </article>
              </div>
            </SwiperSlide>
          </Swiper>
        </article>
      </article>

      <article className="five">
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
