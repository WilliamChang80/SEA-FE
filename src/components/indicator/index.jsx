import React from "react";
import { useHistory } from "react-router-dom";

import { IndicatorContainer } from "./style";
import { Button } from "components/error/style";

const Indicator = () => {
  const history = useHistory();
  return (
    <IndicatorContainer>
      <div className="indicator-image" />
      <div className="indicator-message">
        Looks like you don't have any item on your store. Maybe you can add some
        more item.
      </div>
      <Button onClick={() => history.push("/item/add")}>Add Item</Button>
    </IndicatorContainer>
  );
};

export default Indicator;
