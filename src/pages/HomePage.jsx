import React, { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { HomeContainer } from "components/home/style";
import Navbar from "components/navbar";
import { useState } from "react";
import Card from "components/card";
import Spinner from "components/spinner";
import {
  getAllItemsUrl,
  getItemsByUserIdUrl,
  getItemsByCategoryIdUrl,
  deleteItemUrl
} from "config/Url";
import App from "config/App";
const { appUrl } = App;

const HomePage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "ASUS",
      description: "This is ASUS",
      category: {
        id: 1,
        createdAt: "2020-07-17T05:21:42.456+00:00",
        updatedAt: "2020-07-17T05:21:42.456+00:00",
        name: null
      },
      price: 500000,
      user: {
        id: 1,
        username: "1236"
      }
    }
  ]);
  const imageUrl = `${appUrl}/Images/Item.jpg`;
  useEffect(() => {
    axios
      .get(getAllItemsUrl, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => setItems(res.data.data))
      .catch((e) => toast.error(e.message));
  });

  const renderItems = () => {
    return !!items.length ? renderCards() : <Spinner />;
  };

  const buyItems = (itemId, userId) => {
    userId === window.localStorage.getItem("userId")
      ? toast.error("Cannot buy your own item")
      : axios
          .delete(deleteItemUrl(itemId), {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`
            }
          })
          .then(
            (res) =>
              res.data.code === 200 && toast.success("Success Bought Item")
          )
          .catch((e) => toast.error(e.message));
  };

  const renderBuyButton = (itemId, userId) => {
    return (
      <div className="action-buy" onClick={() => buyItems(itemId, userId)}>
        <div className="fa fa-money" /> Buy Item
      </div>
    );
  };

  const renderCards = () => {
    return (
      <div className="item-container">
        {items.map((item) => (
          <div className="buy" key={item.id}>
            {renderBuyButton(item.id, item.user.id)}
            <Card
              title={item.name}
              image={imageUrl}
              description={item.description}
              price={item.price}
              owner={item.user.username}
              category={item.category.name}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <HomeContainer>
      <Navbar />
      <div className="page-container">
        <div className="page-title">Home</div>
        {renderItems()}
      </div>
    </HomeContainer>
  );
};

export default HomePage;
