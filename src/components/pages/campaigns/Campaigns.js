import React from "react";
import { Link } from "react-router-dom";
import {useSelector}from 'react-redux'
import StripeButton from "../../StripeButton";

const Campaigns = () => {
  const campaignsState = useSelector(({campaigns_reducer}) => campaigns_reducer)
  
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Campaigns page</h2>
      <div
        style={{
          gridTemplateColumns: "1fr 1fr 1fr",
          display: " grid",
          gridGap: "19px",
        }}
      >
        {campaignsState.map((value) => (
          <div key={value.id} style={{ textAlign: "center" }}>
            <Link to={`/campaigns/${value.id}`}>
              <img
                src={value.image}
                alt={value.title}
                style={{
                  width: "300px",
                  height: "235px",
                  marginBottom: "10px",
                }}
              />
              <h4>{value.title}</h4>
            </Link>
            <p>{value.shortDiscription}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <span style={{ display: "block" }}>Amount {value.amount} $</span>
                <span>Left {value.left} $</span>
              </div>
              <StripeButton price='50'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
