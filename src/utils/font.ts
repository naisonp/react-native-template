import { TextStyle } from 'react-native/types';

export type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export const getFontStyles = (fontWeight?: FontWeight): TextStyle => {
  let fontFamily = 'Inter-';
  const fontWeightNum = fontWeight ? Number(fontWeight) : 400;

  if (fontWeightNum <= 100) {
    fontFamily += 'Thin';
  } else if (fontWeightNum <= 200) {
    fontFamily += 'ExtraLight';
  } else if (fontWeightNum <= 300) {
    fontFamily += 'Light';
  } else if (fontWeightNum <= 400) {
    fontFamily += 'Regular';
  } else if (fontWeightNum <= 500) {
    fontFamily += 'Medium';
  } else if (fontWeightNum <= 600) {
    fontFamily += 'SemiBold';
  } else if (fontWeightNum <= 700) {
    fontFamily += 'Bold';
  } else if (fontWeightNum <= 800) {
    fontFamily += 'ExtraBold';
  } else {
    fontFamily += 'Black';
  }

  return {
    fontFamily,
    fontWeight: undefined,
    fontStyle: undefined,
  };
};
