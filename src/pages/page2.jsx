import "../App.css";

import map from "../img/map-embed (1).png"

import logo from "../img/logo (2).png"

//swiper

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function page2() {
  return (
    <div className="page2">
      <article className="one">
        <div className="left">
          <h1>Горнолыжный курорт «Такман»</h1>

          <p>
            Горнолыжный курорт «Такман», расположенный рядом с городом Чусовой в
            Пермском крае, является одним из наиболее популярных в регионе. И
            это неудивительно — здесь оборудовано более 11 трасс как для
            профессиональных лыжников, так и для новичков в этом деле.{" "}
          </p>

          <p>
            Кроме того, курорт обладает туристической инфраструктурой и всеми
            условиями, необходимыми для отдыха — развлечениями, гостиницами, а
            также всеми другими необходимыми деталями
          </p>
        </div>
      </article>

      <article className="two">
        <div className="top">
          <h1>Бронирование коттеджа</h1>
          <article>
            <div>
              <button className="btn">Заезд</button>
              <button className="btn">Выезд</button>
              <button className="btn">2 человека</button>
            </div>
            <button className="btn2">Найти</button>
          </article>
        </div>

        <div className="bottom">
          <article className="one">
            <div className="left">
              <h1>Медвежий холл</h1>

              <p>21 место, от 1700₽ за сутки</p>

              <button className="btn2">Подробнее</button>
            </div>
          </article>
        </div>
      </article>

      <article className="three">
        <div className="top">
          <article className="one">
            <div className="left">
              <h1>Белая белка</h1>

              <p>21 место, от 1700₽ за сутки</p>

              <button className="btn2">Подробнее</button>
            </div>
          </article>
        </div>
      </article>

      <article className="four">
        <div className="top">
          <article className="one">
            <div className="left">
              <h1>Сова</h1>

              <p>21 место, от 1700₽ за сутки</p>

              <button className="btn2">Подробнее</button>
            </div>
          </article>
        </div>
      </article>

      <article className="five">
        <article className="ones">
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
                  <button className="btn2">Подробнее</button>
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
                  <button className="btn2">Подробнее</button>
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
                  <button className="btn2">Подробнее</button>
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
                  <button className="btn2">Подробнее</button>
                </article>
              </div>
            </SwiperSlide>


          </Swiper>
        </article>
      </article>

      <article className="six">
        <div className="top">
          <h1>Бронирование коттеджа</h1>
          <article>
            <div>
              <button className="btn">Заезд</button>
              <button className="btn">Выезд</button>
              <button className="btn">2 человека</button>
            </div>
            <button className="btn2">Найти</button>
          </article>
        </div>

        <div className="bottom">
          <article className="one">
            <div className="left">
              <h1>Медвежий холл</h1>

              <p>21 место, от 1700₽ за сутки</p>

              <button className="btn2">Подробнее</button>
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
