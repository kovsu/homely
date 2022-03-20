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

// 拿到所有的计划分类
const getAllCategeoris = () =>
  new Promise((resolve, reject) => {
    axios
      .get("/plan/allCategories")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

// 拿到用户的计划
const getMyPlan = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get("/plan/myPlan", {
        params: {
          id,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

// 设置计划的状态
const setStatus = (planId, userId) =>
  new Promise((resolve, reject) => {
    axios
      .get("/plan/setStatus", {
        params: {
          userId,
          planId,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

const getPlanInfo = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get("/plan/planInfo", {
        params: {
          id,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

// 上传计划
const publishPlan = (planId, userId, name, start_time, time) =>
  new Promise((resolve, reject) => {
    axios
      .get("/plan/publish", {
        params: {
          planId,
          userId,
          name,
          start_time,
          time,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default {
  getAllKits,
  getAllCategeoris,
  getMyPlan,
  setStatus,
  getPlanInfo,
  publishPlan,
};
