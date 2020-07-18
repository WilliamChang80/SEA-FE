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
  deleteItemUrl,
  getAllCategoriesUrl,
  getAllUsersUrl
} from "config/Url";
import { Button } from "components/error/style";
import App from "config/App";
import Modal from "components/modal";

const { appUrl } = App;

const HomePage = () => {
  const [data, setDatas] = useState({
    items: [],
    categories: [],
    users: []
  });
  const [selectedItem, setSelectedItem] = useState({ category: "", user: "" });
  const [isOpenedModal, setOpenedModal] = useState(false);
  const toggleModal = () => {
    setOpenedModal(!isOpenedModal);
  };
  const imageUrl = `${appUrl}/Images/Item.jpg`;
  useEffect(() => {
    const getData = async () => {
      const itemList = await axios
        .get(getAllItemsUrl, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`
          }
        })
        .then((res) => res.data.data);
      const categoryList = await axios
        .get(getAllCategoriesUrl, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`
          }
        })
        .then((res) => res.data.data)
        .catch((e) => toast.error(e.message));
      const userList = await axios
        .get(getAllUsersUrl, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`
          }
        })
        .then((res) => res.data.data)
        .catch((e) => toast.error(e.message));
      setDatas({ items: itemList, categories: categoryList, users: userList });
    };
    getData();
  }, []);

  const renderItems = () => {
    return !!data.items ? renderCards() : <Spinner />;
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
          .then((res) => res.data.code === 200 && removeItem(itemId))
          .catch((e) => toast.error(e.message));
    toggleModal();
  };

  const removeItem = (itemId) => {
    const itemList = data.items.filter((item) => item.id !== itemId);
    toast.success("Successfully bought item");
    setDatas({ ...data, items: itemList });
  };

  const renderBuyButton = () => {
    return (
      <div className="action-buy" onClick={() => toggleModal()}>
        <div className="fa fa-money" /> Buy Item
      </div>
    );
  };

  const renderCards = () => {
    return (
      <div className="item-container">
        {data.items.map((item) => (
          <div className="buy" key={item.id}>
            {item.user.id !== Number(window.localStorage.getItem("userId")) ? (
              <div>
                {renderBuyModal(item.user, { id: item.id, name: item.name })}
                {renderBuyButton()}
              </div>
            ) : (
              <div className="action-buy none">
                <div className="fa fa-ban" /> Unable to Buy
              </div>
            )}
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

  const filterByCategory = (e) => {
    const categoryId = e.target.value;
    setSelectedItem({ category: categoryId, user: "" });
    axios
      .get(getItemsByCategoryIdUrl(categoryId), {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => setDatas({ ...data, items: res.data.data }))
      .catch((e) => toast.error(e.message));
  };

  const filterByUser = (e) => {
    const userId = e.target.value;
    setSelectedItem({ user: userId, category: "" });
    axios
      .get(getItemsByUserIdUrl(userId), {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => setDatas({ ...data, items: res.data.data }))
      .catch((e) => toast.error(e.message));
  };

  const resetFilters = () => {
    setSelectedItem({ category: "", user: "" });
    axios
      .get(getAllItemsUrl, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => setDatas({ ...data, items: res.data.data }))
      .catch((e) => toast.error(e.message));
  };

  const renderBuyModal = (user, item) => {
    return (
      <Modal
        title={"Buy Item"}
        onSubmitAction={() => buyItems(item.id, user.id)}
        confirmation={`Are you sure you want to buy ${item.name} from ${user.username}? `}
        toggleModal={toggleModal}
        isOpenedModal={isOpenedModal}
      />
    );
  };

  const renderFilter = () => {
    return (
      <div className="page-filter">
        <select value={selectedItem.category} onChange={filterByCategory}>
          <option value="" disabled>
            Select Item By Category
          </option>
          {data.categories.map((category) => (
            <option value={category.id} key={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <select value={selectedItem.user} onChange={filterByUser}>
          <option value="" disabled>
            Select Item By User
          </option>
          {data.users.map((user) => (
            <option value={user.id} key={user.username}>
              {user.username}
            </option>
          ))}
        </select>
        <Button className="button-reset" onClick={() => resetFilters()}>
          Reset Filters
        </Button>
      </div>
    );
  };
  return (
    <HomeContainer>
      <Navbar />
      <div className="page-container">
        <div className="page-title">Home</div>
        {renderFilter()}
        {renderItems()}
      </div>
    </HomeContainer>
  );
};

export default HomePage;
