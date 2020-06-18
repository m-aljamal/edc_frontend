import React, { useState } from "react";
import StripeButton from "../../StripeButton";
import { useSelector } from "react-redux";
const Campaign = ({ match: { params } }) => {
  const campaignState = useSelector(({ campaigns_reducer }) =>
    campaigns_reducer.find((camp) => camp.id === Number(params.id))
  );
  const {
    image,
    longDiscription,
    title,
    amount,
    paid,
    left,
    date,
  } = campaignState;
  const [price, setPrice] = useState(0);
  return (
    <div style={{ marginTop: "50px" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", textAlign: "center" }}>
          <img src={image} alt={title} style={{ width: "500px" }} />
          <p>Started on {date}</p>
          <p>{longDiscription}</p>
        </div>
        <div style={{ width: "50%" }}>
          <h3>{title}</h3>
          <p> Amount {amount}</p>
          <p> Paid {paid}</p>
          <p> Left {left}</p>

          <input
            placeholder="Total $"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            style={{
              display: "block",
              marginBottom: "30px",
              border: "1px solid",
            }}
          />
          <StripeButton price={price} />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
