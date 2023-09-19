import axios from "axios";

export async function fetchData(url) {
  url = "/data/" + url;
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error:", error);
  }
}
