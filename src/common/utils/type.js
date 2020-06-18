export const isNull = (value) => value === null;

export const isUndefined = (value) => value === undefined;

export const isNil = (value) => isNull(value) || isUndefined(value);

export const isEmpty = (value) => {
  if (typeof value !== 'object' || isNull(value)) {
    return true;
  }

  return Object.keys(value).length === 0;
};

export const isNumber = (value) => typeof value === 'number' || value instanceof Number;
