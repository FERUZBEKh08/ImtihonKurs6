// import marImgOne from "../img/mainPageImg1.png"
// import marImgTwo from "../img/marTwoimg2.png"
// import marImgThree from "../img/IMG_0244 1.png"
import map from "../img/map-embed (1).png"

import logo from "../img/logo (2).png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function main() {
  return (
    <div className="mainPage">
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

          <button className="btn2">Подробнее</button>
        </div>
      </article>

      <article className="two">
        <div className="top">
          <h1>Наши услуги</h1>

          <p>
            Весь спектр услуг от проката инвентаря до катания на снегоходах!
          </p>

          <button className="btn2">Подробнее</button>
        </div>
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
              <article className="article">
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swipersss">
              <article>
                <div>
                  <h1>Аренда инструктора</h1>
                  <p>
                    Весь спектр услуг от проката инвентаря до катания на
                    снегоходах!
                  </p>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="top">
          <h1>Наши услуги</h1>

          <p>
            Весь спектр услуг от проката инвентаря до катания на снегоходах!
          </p>

          <button className="btn2">Подробнее</button>
        </div>
      </article>

      <article className="three">
        <div className="top">
          <h1>Афиша</h1>

          <p>
            Весь спектр услуг от проката инвентаря до катания на снегоходах!
          </p>

          <button className="btn3">Подробнее</button>
        </div>
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
            <SwiperSlide className="swipersss"></SwiperSlide>

            <SwiperSlide className="swipersss"></SwiperSlide>

            <SwiperSlide className="swipersss"></SwiperSlide>

            <SwiperSlide className="swipersss"></SwiperSlide>

            <SwiperSlide className="swipersss"></SwiperSlide>

            <SwiperSlide className="swipersss"></SwiperSlide>

            <SwiperSlide className="swipersss"></SwiperSlide>

            <SwiperSlide className="swipersss"></SwiperSlide>

            <SwiperSlide className="swipersss"></SwiperSlide>
          </Swiper>
        </div>
      </article>

      <article className="four">
        <div className="left">
          <h1>Проживание на «Такмане»</h1>

          <p>Вашему выбору 5 коттеджей и SkiMotel. Цены от 1000₽</p>

          <button className="btn2">Подробнее</button>
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
