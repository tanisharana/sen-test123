import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons, COLORS, SIZES } from "../../../constants";
import styles from './ViewPurchase.style';
import useFetch from '../../../hook/useFetch';

const ViewPurchase = () => {
  const navigation = useNavigation();
  const [schemeData, setSchemeData] = useState([]);
  const { loading, error } = useFetch('http://14.97.24.99:8019/api/PurchasePaint/GetPendingPurchase?User_Id=x&EmpCode=y');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: COLORS.pink },
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: 'View Purchase',
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

  useEffect(() => {
    if (!loading && !error) {
      setSchemeData(schemeData); 
    }
  }, [loading, error]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!schemeData || schemeData.length === 0) {
    return <Text>No data available</Text>;
  }

  const totalPages = Math.ceil(schemeData.length / itemsPerPage);

  const handlePagination = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView contentContainerStyle={styles.container}>
        {schemeData.slice(startIndex, endIndex).map(item => (
          <Text key={item.Sku_Id} style={styles.text}>
            {item.Product_Name}
            {'\n'}
            Pack Size: {item.Pack_Size}
            {'\n'}
            Points Per Pack: {item.PointsPerPack}
            {'\n'}
            Sku Code: {item.Skucode}
          </Text>
        ))}
        <View style={styles.paginationContainer}>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePagination('prev')}
            disabled={currentPage === 1}
          >
            <Text style={styles.paginationButtonText}>Prev</Text>
          </TouchableOpacity>
          <Text style={styles.pageText}>{currentPage} / {totalPages}</Text>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePagination('next')}
            disabled={currentPage === totalPages}
          >
            <Text style={styles.paginationButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewPurchase;
