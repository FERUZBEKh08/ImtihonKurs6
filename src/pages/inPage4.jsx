import "../App.css";


import logo from "../img/logo (2).png";

export default function inPage4() {
  return (
    <div className="inPage4">
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

      <div className="navbarBottom">
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
      </div>
    </div>
  );
}
