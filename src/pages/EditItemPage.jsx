import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Input, Button, Form } from "components/login/style";
import { FormContainer } from "components/form/style";
import Navbar from "components/navbar/index";
import { useState } from "react";
import {
  getItemsByIdUrl,
  getAllCategoriesUrl,
  updateItemUrl
} from "config/Url";
import { useEffect } from "react";

const EditItemPage = ({ itemId }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [item, setItem] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get(getItemsByIdUrl(itemId), {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => res.data.data)
      .then((res) =>
        setItem({
          name: res.name,
          description: res.description,
          categoryId: res.categoryId,
          price: res.price
        })
      )
      .catch((e) => toast.error(e.message));
  });

  const history = useHistory();

  const onSubmit = (result) => {
    const data = {
      name: result.name,
      description: result.description,
      categoryId: Number(result.category),
      price: Number(result.price),
      userId: Number(window.localStorage.getItem("userId"))
    };
    axios
      .post(updateItemUrl(item.id), data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) =>
        res.data.code === 200
          ? redirectToItemPage("Success Added Item")
          : toast.error(res.data.data.message)
      )
      .catch((e) => toast.error(e.message));
    reset();
  };

  const redirectToItemPage = (message) => {
    toast.success(message);
    history.push("/my-item");
  };

  const renderCategoryForm = () => {
    return (
      <select
        name="category"
        ref={register({ required: true })}
        value={item.categoryId}
      >
        {category.map((cat) => (
          <option value={cat.id} key={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <FormContainer>
      <Navbar />
      <div className="form-container">
        <div className="form-title">Create Item</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-container">
            <div className="form-sub">Item Name</div>
            {errors.name && (
              <div className="error-message">This field is required</div>
            )}
          </div>
          <Input
            type="text"
            placeholder="Enter item name"
            className="form-name"
            name="name"
            value={item.name}
            ref={register({ required: true })}
          />
          <div className="field-container">
            <div className="form-sub">Item Price</div>
            {(errors.price?.type === "required" && (
              <div className="error-message">This field is required</div>
            )) ||
              (errors.price?.type === "validate" && (
                <div className="error-message">Price must be number</div>
              ))}
          </div>
          <Input
            type="text"
            placeholder="Enter item price"
            className="form-price"
            name="price"
            value={item.price}
            ref={register({
              required: true,
              validate: (value) => /^[0-9]*$/.test(value)
            })}
          />
          <div className="field-container">
            <div className="form-sub">Item description</div>{" "}
            {errors.description && (
              <div className="error-message">This field is required</div>
            )}
          </div>
          <Input
            type="text"
            placeholder="Enter item description"
            className="form-desc"
            name="description"
            value={item.description}
            ref={register({ required: true })}
          />
          <div className="form-sub">Item Category</div>
          {renderCategoryForm()}
          <Button type="submit">Add Item</Button>
        </Form>
      </div>
    </FormContainer>
  );
};

export default EditItemPage;
