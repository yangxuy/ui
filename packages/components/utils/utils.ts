export const isUndefined = (val: any): val is undefined => val === undefined;
export const isBoolean = (val: any): val is boolean => typeof val === "boolean";
export const isNumber = (val: any): val is number => typeof val === "number";
export const isString = (val: any): val is number => typeof val === "string";
export const isObject = (val: any): val is number => typeof val === "object";

export const isStringNumber = (val: string): boolean => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};

export function addUnit(value?: string | number, defaultUnit = "px"): string {
  if (!value) return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
  return "";
}

export function deepCopy(obj: any) {
  let res: any;
  if (!isObject(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    res = [];
    for (let index = 0; index < obj.length; index++) {
      const element = obj[index];
      res.push(deepCopy(element));
    }
  } else {
    res = {};
    Object.keys(obj).forEach((key: any) => {
      res[key] = deepCopy((obj as any)[key]);
    });
  }
  return res;
}
