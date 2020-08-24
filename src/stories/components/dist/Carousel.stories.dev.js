"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _slider = _interopRequireDefault(require("../../assets/images/slider1.png"));

var _ = _interopRequireDefault(require("../../assets/images/4.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components/Carousel'
};
exports["default"] = _default;

var Default = function Default() {
  return (
    /* html */
    "\n    <div class=\"grid\">\n      <div class=\"col-desk-12\">\n        <h2>Refresh the page to get scripts</h2>\n        <hr/>\n      </div>\n      <div class=\"col-desk-12\">\n        <div class=\"carousel swiper-container\">\n          <div class=\"swiper-wrapper\">\n          <!-- Slide wrapper -->\n            <div class=\"swiper-slide\">\n              <div class=\"background background--image\" style=\"background-image: url('".concat(_slider["default"], "')\">\n                <h3 class=\"background__title\">my portfolio</h3>\n                <p>\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quibusdam impedit ex harum dicta numquam dignissimos autem ipsam vitae dolorem. Beatae quo earum, officia iste officiis consectetur voluptatum similique accusamus!\n                </p>\n                <p>\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quibusdam impedit ex harum dicta numquam dignissimos autem ipsam vitae dolorem. Beatae quo earum, officia iste officiis consectetur voluptatum similique accusamus!\n                </p>\n                <p>\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quibusdam impedit ex harum dicta numquam dignissimos autem ipsam vitae dolorem. Beatae quo earum, officia iste officiis consectetur voluptatum similique accusamus!\n                </p>\n              </div>\n            </div>\n            <div class=\"swiper-slide\">\n              <div class=\"background background--image\" style=\"background-image: url('").concat(_slider["default"], "')\">\n                <h3 class=\"background__title\">my portfolio</h3>\n                <p>\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quibusdam impedit ex harum dicta numquam dignissimos autem ipsam vitae dolorem. Beatae quo earum, officia iste officiis consectetur voluptatum similique accusamus!\n                </p>\n              </div>\n            </div>\n\n          <!-- End slide wrapper -->\n          </div>\n          <!-- Add Pagination -->\n          <div class=\"swiper-pagination\"></div>\n        </div>\n      </div>\n    </div>\n  ")
  );
};

exports.Default = Default;