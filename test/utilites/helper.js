"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setvalue_ = void 0;
const setvalue_ = (ele, txt) => {
  ele.setValue(txt);
};
exports.setvalue_ = setvalue_;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button_ = void 0;

const button_ = ele => {
  ele.click();
};

exports.button_ = button_;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check_ = void 0;

const check_ = (ele, txt) => {
  expect(ele.getText()).to.equal(txt);
};

exports.check_ = check_;