import { curry, head } from "fxjs/es";
import $each from "./each.js";
import appendTo from "./appendTo.js";
import before from "./before.js";

export default curry(function wrapAll(wrapper, els) {
  before(wrapper, head(els));
  $each(appendTo(wrapper), els);
  return wrapper;
});
