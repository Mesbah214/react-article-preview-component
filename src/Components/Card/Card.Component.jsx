import "./Card.Styles.scss";
import drawer from "../../Resources/images/drawers.jpg";
import author from "../../Resources/images/avatar-michelle.jpg";

function Card() {
  return (
    <div className="card">
      <figure className="card__img">
        <img src={drawer} alt="Drawers" />
      </figure>

      <div className="card__body">
        <h3 className="card__title">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h3>

        <p className="card__text">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="card__footer">
          <div className="card__footer__author">
            <figure className="card__footer__author-img">
              <img src={author} alt="author" />
            </figure>
            
            <p className="card__footer__author-name">Michelle Appleton</p>
            
            <time className="card__footer__author-date">28 Jun 2020</time>
          </div>

          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
