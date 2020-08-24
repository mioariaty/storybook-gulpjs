"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundImage = exports["default"] = void 0;

var _banner = _interopRequireDefault(require("../../assets/images/banner1.png"));

var _banner2 = _interopRequireDefault(require("../../assets/images/banner2.png"));

var _divider = _interopRequireDefault(require("../../assets/images/divider.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components/Background'
};
exports["default"] = _default;

var BackgroundImage = function BackgroundImage() {
  return (
    /* html */
    "\n    <div class=\"grid-fluid\">\n      <div class=\"col-desk-12\">\n        <h2>Content center</h2>\n      </div>\n      <div class=\"col-desk-12\">\n        <div class=\"background background--image background--center\" style=\"background-image: url('".concat(_banner["default"], "')\">\n          <h3 class=\"background__title\"><span>B</span>M.</h3>\n          <ul class=\"navbar-nav\">\n            <li class=\"nav__item\">\n              <a href=\"#\" class=\"nav__link\">Home</a>\n            </li>\n\n            <li class=\"nav__item\">\n              <a href=\"#\" class=\"nav__link\">About</a>\n            </li>\n\n            <li class=\"nav__item\">\n              <a href=\"#\" class=\"nav__link\">Portfolio</a>\n            </li>\n\n            <li class=\"nav__item\">\n              <a href=\"#\" class=\"nav__link\">Blog</a>\n            </li>\n\n            <li class=\"nav__item\">\n              <a href=\"#\" class=\"nav__link\">Contact</a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n\n      <hr>\n\n      <div class=\"col-desk-12\">\n        <h2>Content left</h2>\n      </div>\n      <div class=\"col-desk-12\">\n        <div class=\"background background--image\" style=\"background-image: url('").concat(_banner2["default"], "')\">\n          <h3 class=\"background__title\">my portfolio</h3>\n          <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb pl-0\">\n              <li class=\"breadcrumb__item\">\n                <a href=\"#\" class=\"breadcrumb__link text-white\">Home</a>\n              </li>\n              <li class=\"breadcrumb__item\">\n                <a href=\"#\" class=\"breadcrumb__link text-white\">About</a>\n              </li>\n              <li class=\"breadcrumb__item active\">\n                <a href=\"#\" class=\"breadcrumb__link text-white\">Contact</a>\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  ")
  );
}; // export const BackgroundColor = () => {
//   return /*html*/ `
//     <div class="grid-fluid">
//       <div class="col-desk-12">
//       </div>
//     </div>
//   `;
// };


exports.BackgroundImage = BackgroundImage;