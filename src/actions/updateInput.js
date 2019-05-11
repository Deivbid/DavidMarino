import { INPUT_UPDATE } from './types';

const updateInputFor = (scope) => {
  const updateInputWrapper = (name, value) => {
    return {
      type: `${scope}_${name.toUpperCase()}_${INPUT_UPDATE}`,
      payload: value,
    };
  }
  return updateInputWrapper;
}

export const updateInputLogin = updateInputFor('LOGIN');
export const updateInputMessage= updateInputFor('MESSAGE');

