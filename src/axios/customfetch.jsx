import axios from "axios";

const customfetch = axios.create({
  baseURL: "https://redux-toolkit-jobster-api-server.onrender.com/api/v1",
});

export default customfetch;
