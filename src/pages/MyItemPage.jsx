import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { MyItemPageContainer, Button } from "components/my-item/style";
import { getItemsByUserIdUrl, deleteItemUrl } from "config/Url";
import Indicator from "components/indicator";
import Card from "components/card";
import Spinner from "components/spinner";
import Navbar from "components/navbar";
import App from "config/App";
import Modal from "components/modal";

const { appUrl } = App;

const MyItemPage = () => {
  const [items, setItems] = useState([
    {
      name: "test",
      description: "Desc",
      price: 5000,
      user: {
        id: 1,
        username: "User"
      },
      category: {
        id: 1,
        name: "VGA"
      }
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const [isOpenedModal, setOpenedModal] = useState(false);

  const imageUrl = `${appUrl}/Images/Item.jpg`;

  const history = useHistory();

  const toggleModal = () => {
    setOpenedModal(!isOpenedModal);
  };

  useEffect(() => {
    axios
      .get(getItemsByUserIdUrl(window.localStorage.getItem("userId")), {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => setItems(res.data.data));
  });

  const deleteItems = (id) => {
    axios
      .delete(deleteItemUrl(id), {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then(
        (res) =>
          res.data.code === 200 &&
          toast.success("Item Has Successfully Deleted")
      )
      .catch((e) => toast.error(e.message));
  };

  const renderDeleteModal = (id) => {
    return (
      <Modal
        title={"Delete Item"}
        onSubmitAction={() => deleteItems(id)}
        confirmation={"Are you sure you want to delete this item?"}
        toggleModal={toggleModal}
        isOpenedModal={isOpenedModal}
      />
    );
  };

  const deleteActions = () => {
    return (
      <div className="action-delete" onClick={() => toggleModal()}>
        <div className="fa fa-trash"></div> Delete
      </div>
    );
  };

  const editActions = () => {
    return (
      <div className="action-edit">
        <div className="fa fa-edit"></div> Edit
      </div>
    );
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const renderCards = () => {
    return !!items.length ? renderItems() : <Indicator />;
  };

  const renderItems = () => {
    return (
      <React.Fragment>
        <Button onClick={() => toggleEditing()}>
          {isEditing ? "View Items" : "Edit Items"}
        </Button>
        <Button onClick={() => history.push("/item/add")} className="btn-add">
          Add Item
        </Button>
        <div className="item-container">
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <Card
                title={item.name}
                image={imageUrl}
                actions={[deleteActions(item.id), editActions()]}
                description={item.description}
                price={item.price}
                owner={item.user.username}
                category={item.category.name}
                isEditing={isEditing}
              />
              {renderDeleteModal(item.id)}
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  };

  return (
    <MyItemPageContainer>
      <Navbar />
      {!!items ? renderCards() : <Spinner />}
    </MyItemPageContainer>
  );
};

export default MyItemPage;
