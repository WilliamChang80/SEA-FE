import React, { useEffect, useState } from "react";
import axios from "axios";

import { MyItemPageContainer, Button } from "components/my-item/style";
import { getItemsByUserIdUrl } from "config/Url";
import Indicator from "components/indicator";
import Card from "components/card";
import Spinner from "components/spinner";
import Navbar from "components/navbar";
import App from "config/App";

const { appUrl } = App;

const MyItemPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Test",
      description: "desc",
      owner: "owner",
      price: 5000,
      category: { id: 1, name: "category" }
    },
    {
      id: 2,
      name: "Test",
      description: "desc",
      owner: "owner",
      price: 5000,
      category: { id: 1, name: "category" }
    },
    {
      id: 3,
      name: "Test",
      description: "desc",
      owner: "owner",
      price: 5000,
      category: { id: 1, name: "category" }
    },
    {
      id: 4,
      name: "Test",
      description: "desc",
      owner: "owner",
      price: 5000,
      category: { id: 1, name: "category" }
    },
    {
      id: 5,
      name: "Test",
      description: "desc",
      owner: "owner",
      price: 5000,
      category: { id: 1, name: "category" }
    }
  ]);

  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    // axios
    //   .get(getItemsByUserIdUrl(window.localStorage.getItem("userId")), {
    //     headers: {
    //       Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
    //     }
    //   })
    //   .then((res) => setItems(res.data.data));
  });

  const imageUrl = `${appUrl}/Images/Item.jpg`;
  const deleteActions = () => {
    return (
      <div className="action-delete">
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
    // return !!items.length ? (
    //   items.map((item) => <div>{item.name}</div>)
    // ) : (
    //   <Indicator />
    // );
    return (
      <React.Fragment>
        <Button onClick={() => toggleEditing()}>Edit Items</Button>
        <div className="item-container">
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              image={imageUrl}
              actions={[deleteActions(), editActions()]}
              description={item.description}
              price={item.price}
              owner={item.owner}
              category={item.category.name}
              isEditing={isEditing}
            />
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
