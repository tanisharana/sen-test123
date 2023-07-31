import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons, COLORS, SIZES } from "../../../constants";
import styles from './AddPurchase.style';

const AddPurchase = () => {
  const navigation = useNavigation();

  const handleScanQR = () => {
    console.log("Scanning QR...");
  };

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: COLORS.pink },
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: 'Add Purchase',
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
      <View>
        <TouchableOpacity style={styles.button} onPress={handleScanQR}>
          <Text style={styles.buttonText}>Scan Product QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddPurchase;
