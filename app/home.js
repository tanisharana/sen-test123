import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, Dimensions, TouchableOpacity, TextInput, StyleSheet, Linking } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, icons, SIZES, images } from '../constants';
import { useNavigation } from '@react-navigation/native'; 

const imagesArray = [
  { imageUrl: images.rank1 },
  { imageUrl: images.rank2 },
  { imageUrl: images.rank3 },
  { imageUrl: images.rank4 },
];

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/PainterProgram/');
  };

  const handleYoutubePress = () => {
    Linking.openURL('https://www.youtube.com/@Sher-e-nippon');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.pink },
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ flexDirection: 'row' }}>
              <ScreenHeaderBtn iconUrl={icons.facebook} dimension="100%" handlePress={handleFacebookPress} />
              <ScreenHeaderBtn iconUrl={icons.youtube} dimension="100%" handlePress={handleYoutubePress} />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <ScreenHeaderBtn iconUrl={icons.phone} dimension="60%" />
              <ScreenHeaderBtn iconUrl={icons.notification} dimension="60%" />
            </View>
          ),
          headerTitle: 'Sher-E-Nippon',
          headerTitleStyle: {
            headerTitleAlign: 'center',
            color: COLORS.white,
            fontSize: 18,
            fontWeight: 'bold',
            paddingLeft: 42,
          },
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="AddPurchase" component={AddPurchase} />
        <Stack.Screen name="ViewScheme" component={ViewScheme} />
        <Stack.Screen name="ViewPurchase" component={ViewPurchase} />
        <Stack.Screen name="RedemptionHistory" component={RedemptionHistory} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="OTP" component={OTPScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const HomeScreen = ({ navigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentImageIndex(index);
  };

  const renderSlides = () => {
    return imagesArray.map((item, index) => (
      <View
        key={index}
        style={{
          width: Dimensions.get('window').width,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={item.imageUrl}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
        />
      </View>
    ));
  };

  // CALCULATE POINTS
  const calculatePoints = () => {
    const confirmedPoints = 500;
    const pendingPoints = 250;
    return { confirmedPoints, pendingPoints };
  };

  const { confirmedPoints, pendingPoints } = calculatePoints();

  const handleAddPurchasePress = () => {
    navigation.navigate('AddPurchase');
  };

  const handleViewSchemePress = () => {
    navigation.navigate('ViewScheme');
  };

  const handleViewPurchasePress = () => {
    navigation.navigate('ViewPurchase');
  };

  const handleRedemptionHistoryPress = () => {
    navigation.navigate('RedemptionHistory');
  };

  const handleLeaderBoardPress = () => {
    navigation.navigate('LeaderBoard');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={{ flex: 1, padding: SIZES.medium, width: Dimensions.get('window').width }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          onScroll={(event) => {
            const slideIndex = Math.round(
              event.nativeEvent.contentOffset.x / Dimensions.get('window').width
            );
            handleSlideChange(slideIndex);
          }}
          style={{ marginTop: SIZES.base }}
        >
          {renderSlides()}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: SIZES.small,
          }}
        >
          <View style={{ width: 150 }}>
            <LinearGradient
              colors={COLORS.grad1}
              start={[0, 0]}
              end={[1, 1]}
              locations={[0.38, 1]}
              style={{
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
                height: 62,
                width: 148,
              }}
            >
              <Text style={{ fontWeight: 'bold', color: COLORS.white }}>Confirmed Points</Text>
              <Text style={{ color: COLORS.white }}>{confirmedPoints}</Text>
            </LinearGradient>
          </View>
          <View style={{ width: 150 }}>
            <LinearGradient
              colors={COLORS.grad1}
              start={[0, 0]}
              end={[1, 1]}
              locations={[0.38, 1]}
              style={{
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
                height: 62,
                width: 148,
              }}
            >
              <Text style={{ fontWeight: 'bold', color: COLORS.white }}>Pending Points</Text>
              <Text style={{ color: COLORS.white }}>{pendingPoints}</Text>
            </LinearGradient>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 49,
            width: 312,
            backgroundColor: COLORS.lightGray,
            borderRadius: 10,
            marginTop: 20,
            width: Dimensions.get('window').width - 2 * SIZES.medium,
          }}
          // Leaderboard page
          onPress={handleLeaderBoardPress}
        >
          <LinearGradient
            colors={COLORS.grad2}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0.38, 1]}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: SIZES.large,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={icons.graphLeaderboard}
                style={{ width: 24, height: 24, marginRight: SIZES.small }}
              />
              <Text style={{ fontWeight: 'bold', color: COLORS.white, fontSize: 18 }}>
                Leader Board
              </Text>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Image
                  source={icons.arrowFront}
                  style={{ width: 24, height: 24, marginLeft: SIZES.base }}
                />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: SIZES.large }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: COLORS.gray2,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginRight: SIZES.medium,
              height: 97,
              width: 147,
              shadowColor: COLORS.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 2,
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}
            onPress={handleAddPurchasePress}
          >
            <Image
              source={icons.addPurchase}
              style={{ width: 48, height: 48, marginRight: 1 }}
            />
            <Text style={{ fontWeight: 'bold', color: COLORS.black, fontSize: 16 }}>Add Purchase</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: COLORS.blue,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginRight: SIZES.medium,
              height: 97,
              width: 147,
              shadowColor: COLORS.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 2,
              flexDirection: 'row',
            }}
            onPress={handleViewSchemePress}
          >
            <Image
              source={icons.viewScheme}
              style={{ width: 48, height: 48, marginRight: 1 }}
            />
            <Text style={{ fontWeight: 'bold', color: COLORS.black, fontSize: 16 }}>View Scheme</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: SIZES.large }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: COLORS.pink2,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginRight: SIZES.medium,
              height: 97,
              width: 147,
              shadowColor: COLORS.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 2,
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}
            onPress={handleViewPurchasePress}
          >
            <Image
              source={icons.viewPurchase}
              style={{ width: 48, height: 48, marginRight: 1 }}
            />
            <Text style={{ fontWeight: 'bold', color: COLORS.black, fontSize: 16 }}>View Purchase</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: COLORS.purple,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginRight: SIZES.medium,
              height: 97,
              width: 147,   
              shadowColor: COLORS.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 2,
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}
            onPress={handleRedemptionHistoryPress}
          >
            <Image
              source={icons.redemptionHistory}
              style={{ width: 48, height: 48, marginRight: 1 }}
            />
            <Text style={{ fontWeight: 'bold', color: COLORS.black, fontSize: 16 }}>Redemption{"\n"}History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleVerifyPhoneNumber = async () => {
    if (isNaN(parseInt(phoneNumber)) || phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
  
    try {
      const response = await fetch(
        'http://14.97.24.99:8019/api/master/getotp?MobileNumber=7295087983' +phoneNumber ,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            info: {
              phoneNumber: phoneNumber,
            },
          }),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        const otp = data.otp;
  
        if (otp) {
          navigation.navigate('OTP', { phoneNumber: phoneNumber });
        } else {
          setError('No OTP received from the server');
        }
      } else {
        setError('API request error. Please try again later.');
      }
    } catch (error) {
      console.error('API request error:', error);
      setError('API request error. Please try again later.');
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.profile} style={styles.profileImage} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleVerifyPhoneNumber}>
        <LinearGradient
          colors={[COLORS.pink, COLORS.secondary]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.loginGradient}
        >
          <Text style={styles.loginText}>Verify Phone Number</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const OTPScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    navigation.navigate('PIN');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.profile} style={styles.profileImage} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleVerifyOTP}>
        <LinearGradient
          colors={[COLORS.pink, COLORS.secondary]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.loginGradient}
        >
          <Text style={styles.loginText}>Verify OTP</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const PINScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');

  const handleVerifyPIN = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.profile} style={styles.profileImage} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter PIN"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleVerifyPIN}>
        <LinearGradient
          colors={[COLORS.pink, COLORS.secondary]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.loginGradient}
        >
          <Text style={styles.loginText}>Submit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    marginBottom: 40,
    marginTop: -150,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    aspectRatio: 1,
    overflow: 'hidden',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  loginButton: {
    width: 250,
    height: 40,
  },
  loginGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="PIN" component={PINScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
