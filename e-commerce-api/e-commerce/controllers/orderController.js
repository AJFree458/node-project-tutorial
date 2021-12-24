const Order = require("../models/Order");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const createOrder = (req, res) => {
  res.send("create order");
};

const getAllOrders = (req, res) => {
  res.send("get all orders");
};

const getSingleOrder = (req, res) => {
  res.send("get single order");
};

const getCurrentUserOrders = (req, res) => {
  res.send("get current user orders");
};

const updateOrder = (req, res) => {
  res.send("update order");
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
