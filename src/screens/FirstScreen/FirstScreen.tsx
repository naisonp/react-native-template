import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/components';
import { useThemeStyles } from '@/hooks/themeStyles';
import { MAIN_ROUTE } from '@/routes/routes';
import { CreateStylesFn } from '@/utils/interfaces';

const createStyles: CreateStylesFn = ({ theme }) =>
  StyleSheet.create({
    title: {
      color: theme.font.colors.primary,
    },
    button: {
      width: '50%',
      backgroundColor: 'gray',
      marginTop: 10,
      padding: 15,
      alignItems: 'center',
      borderRadius: 15,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });

const FirstScreen: FC = () => {
  const { t } = useTranslation();
  const styles = useThemeStyles(createStyles);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.title}>{t('firstScreen.title')}</Text>
      <TouchableOpacity
        style={styles.button}
        // https://stackoverflow.com/a/69258989
        onPress={() => navigation.navigate(MAIN_ROUTE.SECOND_SCREEN as never)}
      >
        <Text style={styles.buttonText}>{t('firstScreen.button')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FirstScreen;
