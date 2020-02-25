import attr from './attr.js';
import setAttr from './setAttr.js';
import setData from './setData.js';
import dataMap from './.internal/_dataMap.js';
import ifElse from "fxjs2/Strict/ifElse.js";
import _parseDataStr from "./.internal/_parseDataStr.js";
import pipe from "fxjs2/Strict/pipe.js";
import go from "fxjs2/Strict/go.js";
import hi from "fxjs2/Strict/hi.js";

export default el => {
  if (dataMap.has(el)) return dataMap.get(el);
  go(
    attr('data-fx-json', el),
    ifElse(
      s => s.slice(0, 9) == '$dataStr_',
      pipe(s => s.substring(9), _parseDataStr),
      JSON.parse
    ),
    data => setData(data, el),
    setAttr(['data-fx-json', 'IN_WEAK_MAP'])
  );

  return dataMap.get(el);
};
