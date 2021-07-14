import axios from "axios";
import { TypeData } from "../types";

const URL = "http://localhost:5000";

export const fetchPost = () => axios.get(`${URL}/posts`);
export const createPost = (payload: TypeData) =>
  axios.post(`${URL}/posts`, payload);
export const updatePost = (payload: TypeData) =>
  axios.post(`${URL}/posts/update`, payload);
