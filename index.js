String.prototype.toUpperCase = function () {
  let symbols = {};

  function add(a, b) {
    symbols[String.fromCharCode(a)] = String.fromCharCode(b);
  }

  function addRange(start, end, offset) {
    for (let i = start; i <= end; ++i) {
      add(i + offset, i);
    }
  }

  addRange(65, 90, 32);
  addRange(1040, 1071, 32);
  add(1105, 1025);

  let result = "";
  for (let i = 0, l = this.length; i < l; ++i) {
    result += symbols[this[i]] || this[i];
  }
  return result;
};

let str = "съешь ещё этих мягких французских булок, да выпей чаю";
console.log(str.toUpperCase());
