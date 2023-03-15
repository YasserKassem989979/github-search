import axios from "axios";
import { BASE_URL } from "./constant";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
  headers: { 'accept': 'application/vnd.github+json' }
});

export default async function fetcher (url: string) {
  const { data } = await instance.get(url);
  return data;
}

export const DEFAULT_PER_PAGE = 10;