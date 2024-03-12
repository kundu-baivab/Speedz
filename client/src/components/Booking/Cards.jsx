import React,{useState} from "react";
import CardList from "../../data/CardList";

const Cards = () => {
    const [selectedCard, setSelectedCard] = useState();
  return (
    <div>
      <div className="mt-3">
        <h5 className="font-weight-bold">Payment Methods</h5>
        <div className="row w-100 ml-1">
          {CardList.map((item, index) => (
            <div key={index} className="m-1 p-1 cardbox"
            style={{
                borderColor: index == selectedCard ? "blue" : null
              }}
              onClick={() => setSelectedCard(index)}>
              <img src={item.image} alt={item.name} width={30} height={30} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
