import url from "./App";

const { serverUrl } = url;

export const registerUrl = `${serverUrl}/auth/register`;
export const loginUrl = `${serverUrl}/auth/login`;
export const createItemUrl = `${serverUrl}/item`;
export const updateItemUrl = (id) => `${serverUrl}/item/${id}`;
export const deleteItemUrl = (id) => `${serverUrl}/item/${id}`;
export const getAllItemsUrl = `${serverUrl}/items`;
export const getItemsByUserIdUrl = (userId) =>
  `${serverUrl}/items/user/${userId}`;
export const getItemsByCategoryIdUrl = (categoryId) =>
  `${serverUrl}/items/category/${categoryId}`;
export const getItemsByIdUrl = (id) => `${serverUrl}/item/${id}`;
export const updateUserUrl = (id) => `${serverUrl}/user/${id}`;
export const getAllCategoriesUrl = `${serverUrl}/categories`;
export const getAllUsersUrl = `${serverUrl}/users`;
export const verifyUserUrl = `${serverUrl}/verify`;
