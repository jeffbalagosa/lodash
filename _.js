const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }

    if (number > start && number < end) {
      return true;
    } else if (number < start || number > end) {
      return false;
    } else {
      return "Oops, something went wrong!";
    }
  },
  words(string) {
    let words = string.split("");
    return words;
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },
  has(obj, key) {
    let hasValue;
    if (obj[key]) {
      hasValue = true;
    } else if (obj[key] === undefined) {
      hasValue = false;
    }
    return hasValue;
  },
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (const key in object) {
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(arr, num) {
    let newArr = [];
    if (num === undefined) {
      num = 1;
    }
    newArr = arr.slice(num, arr.length);
    return newArr;
  },
  dropWhile(arr, predicate) {
    let cb = (element, index) => {
      return !predicate(element, index, arr);
    };
    let dropNum = arr.findIndex(cb);
    let droppedArr = this.drop(arr, dropNum);
    return droppedArr;
  },
  chunk(arr, size = 1) {
    let arrayChunks = [];
    for (let i = 0; i < arr.length; i += size) {
      let arrayChunk = arr.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
