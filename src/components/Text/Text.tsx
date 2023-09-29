import { FC, PropsWithChildren, useMemo } from 'react';
import { ImageStyle, Text as RNText, TextStyle, ViewStyle } from 'react-native';

import { CreateStylesFn } from '@/utils/interfaces';
import { getFontStyles, FontWeight } from '@/utils/font';
import { useThemeStyles } from '@/hooks/themeStyles';

export interface TextProps extends PropsWithChildren {
  style?: TextStyle | (TextStyle | null)[];
  fontWeight?: FontWeight;
}

const createStyles: CreateStylesFn = ({ theme }) => ({
  default: {
    color: theme.font.colors.primary,
    fontSize: 14,
  },
});

const Text: FC<TextProps> = ({ children, fontWeight, style, ...props }) => {
  const styles = useThemeStyles(createStyles);
  const fontStyles = useMemo(() => getFontStyles(fontWeight), [fontWeight]);

  // TODO: Create utils function to perform similar stuff
  const textStyle = useMemo(() => {
    const result: (ViewStyle | ImageStyle | TextStyle | null)[] = [styles.default, fontStyles];

    if (!style) {
      return result;
    }

    if (Array.isArray(style)) {
      result.push(...style);
    } else {
      result.push(style);
    }

    return result;
  }, [fontStyles, style, styles]);

  return (
    <RNText {...props} style={textStyle}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  style: undefined,
  fontWeight: undefined,
};

export default Text;
