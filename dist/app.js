"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

var app = (0, _express["default"])();
var port = process.env.PORT || 8000;
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to Role Assigner!'
  });
});
app.use('/api/v1', _index["default"]);
app.all('*', function (req, res) {
  return res.status(404).json({
    status: 404,
    message: 'The page you are looking for does not exist'
  });
});
app.listen(port, function () {
  console.log("app is live at http://127.0.0.1:".concat(port));
});
var _default = app;
exports["default"] = _default;