import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:9000";

// 拿到所有租赁套件（TOOLKITS）
const getAllKits = () =>
  new Promise((resolve, reject) => {
    axios
      .get("/product/allProduct")
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export default {
  getAllKits,
};
