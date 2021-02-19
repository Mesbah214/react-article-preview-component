import Card from "../../Components/Card/Card.Component";
import { CardProps } from "../../Resources/CardProps";
import "./Cards.Styles.scss";

function Cards() {
  return (
    <div className="cardList">
      {CardProps.map((title, i) => {
        return (
          <Card
            key={CardProps[i].id}
            image={CardProps[i].image}
            title={CardProps[i].title}
            description={CardProps[i].description}
            authorImage={CardProps[i].author.image}
            authorName={CardProps[i].author.name}
            dateOfPublish={CardProps[i].author.dateOfPublish}
          />
        );
      })}
    </div>
  );
}

export default Cards;
