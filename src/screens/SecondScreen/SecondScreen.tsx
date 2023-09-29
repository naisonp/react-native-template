import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/components';
import { useThemeStyles } from '@/hooks/themeStyles';
import { CreateStylesFn } from '@/utils/interfaces';

const createStyleSheet: CreateStylesFn = ({ theme }) =>
  StyleSheet.create({
    title: {
      color: theme.font.colors.secondary,
    },
    button: {
      width: '30%',
      backgroundColor: 'gray',
      marginTop: 10,
      padding: 15,
      alignItems: 'center',
      borderRadius: 15,
    },
    buttonText: {
      color: 'white',
    },
  });

const SecondScreen: FC = () => {
  const { t } = useTranslation();
  const styles = useThemeStyles(createStyleSheet);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.title}>{t('secondScreen.title')}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>{t('secondScreen.button')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SecondScreen;
