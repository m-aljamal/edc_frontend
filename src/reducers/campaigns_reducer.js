import img1 from "../components/images/1.jpg";
import img2 from "../components/images/2.jpg";
import img3 from "../components/images/3.jpg";

const initValues = [
  {
    id: 1,
    title: "University Students Support Fund",
    shortDiscription: "To offer the basic foodstuffs for people in Syria",
    amount: 5000,
    paid: 2000,
    left: 3000,
    image: img1,
    date: "15/06/2020",
    longDiscription:
      "Musa (born in 1996) is a student at administration faculty in Idlib university. He has been living in a small tent with his parents for 7 years. Musa was injured by an airstrike, which left him with a deformed body. All he wants is to be able to finish his higher education and then to be able to provide for his parents. The tuition fees for each academic semester are around $100. This is the story of just one student from among 500 Syrian students, who have similar stories of displacement and unfortunate circumstances. The aim of this campaign is to give them the support that they need to continue their journey in higher education, until one day they are able to become the independent providers of their families.",
  },
  {
    id: 2,
    title: "Campaign of Syrian and Arabic doctors in Germany",
    shortDiscription:
      "Fund the Tuition Fees for 500 Students in Idlib, Aleppo countryside, and Latakia countryside",
    amount: 10000,
    paid: 8000,
    left: 2000,
    image: img2,
    date: "12/06/2020",
    longDiscription:
      "We launch this campaign with the support of a group of Syrian and Arabic doctors in Germany in an effort to alleviate some of the sufferings of our people inside Syria and in refugee countries. All donation will be forwarded to the campaign 212 which is dedicated to offering basic foodstuffs and bread. A donation by 10 $ would provide a family with bread for a month. A donation of 40$ would offer a family with a food parcel enough for one month.",
  },
  {
    id: 3,
    title: "A LOAF OF BREAD",
    shortDiscription:
      "Fund the Tuition Fees for 500 Students in Idlib, Aleppo countryside, and Latakia countryside",
    amount: 100000,
    paid: 40000,
    left: 60000,
    image: img3,
    date: "11/06/2020",
    longDiscription:
      "With massive rise in the price of the US dollar against the Syrian pound, all materials prices also greatly rose. Food insecurity is on the rise. Syrians are unable to afford even bread, one loaf of which now costs 1000 Syrian pounds! The monthly salary of a Syrian employee is not enough to buy bread for a family. This campaign aims at helping Syrian families across Syria to secure basic foodstuffs, through either food parcels or bread supply. $10 donation: bread supply for a family for a month. $40 donation: food parcel for a family enough for a month.",
  },
];

const campaigns_reducre = (state = initValues, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GETALL":
      return state;

    default:
     return state
  }
};

export default campaigns_reducre