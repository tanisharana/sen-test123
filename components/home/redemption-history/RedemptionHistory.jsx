import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Stack, useRouter, useRoute } from 'expo-router';
import { icons, COLORS } from "../../../constants";
import { ScreenHeaderBtn } from '../../../components';
import styles from './RedemptionHistory.style'

const RedemptionHistory = () => {
  const router = useRouter();
  const route = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        name={route.name}
        options={{
          headerStyle: { backgroundColor: COLORS.pink },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.arrowBack}
              dimension={"100%"}
              handlePress={() => router.back()}
            />
          ),
          headerTitle: 'Redemption History',
          headerTitleStyle: {
            color: COLORS.white,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
        }}
      >
      </Stack.Screen>
    </SafeAreaView>
  );
};

export default RedemptionHistory;