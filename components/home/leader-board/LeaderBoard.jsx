import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons, COLORS, SIZES } from "../../../constants";
import styles from './LeaderBoard.style'

const LeaderBoard = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: COLORS.pink },
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: 'Leader Board',
      headerTitleStyle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={icons.arrowBack} style={styles.backIcon} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      
    </SafeAreaView>
  );
};

export default LeaderBoard;