import React, { useEffect, useState } from "react";
import axios from "axios";

import { MyItemPageContainer } from "components/my-item/style";
import { getItemsByUserIdUrl } from "config/Url";
import Indicator from "components/indicator";
import Spinner from "components/spinner";
import Navbar from "components/navbar";

const MyItemPage = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get(getItemsByUserIdUrl(window.localStorage.getItem("userId")), {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => setItems(res.data.data));
  });

  const renderCards = () => {
    return !!items.length ? (
      items.map((item) => <div>{item.name}</div>)
    ) : (
      <Indicator />
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
