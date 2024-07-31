import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { AllLoan_Icon, Groups_Icon, Home_Icon, PersonAdd_Icon, VLBank_Icon } from '../../../res/icons';
import { height, width } from '../../../res/string';
import fonts from '../../../res/fonts';
import { colors } from '../../../res/color';
import Slick from 'react-native-slick';
import Banner from '../Common/Banner';
import HomeMemberScreen from '../../MemberScreens/HomeMemberScreen/HomeMemberScreen';
import OtherService from '../Common/OtherServices';

const HomeAdvisorScreen = () => {

  const DummyData = [
    { id: 1, icon: PersonAdd_Icon, title: "New Member" },
    { id: 2, icon: Home_Icon, title: "Saving Account" },
    { id: 3, icon: AllLoan_Icon, title: "New Loans" },
    { id: 4, icon: Groups_Icon, title: "My Team" },
  ]

  const Data = ({ item }) => {
    return (
      <View style={{ paddingVertical: width / 30, width: width / 2, }}>
        <View style={{ backgroundColor: "white", borderRadius: 10, width: width * 0.4, height: height / 10, alignItems: "center" }}>
          <item.icon height={height / 13} width={width / 10} />
          <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>{item.title}</Text>
        </View>
      </View>
    )
  }
  return (
    <LinearGradient colors={["#BCEBFF", "#2000E8"]} style={styles.container}>
      <View >
        <VLBank_Icon height={height / 13} width={width / 10} />
        <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Good Morning,</Text>
        <Text style={{ fontSize: 20, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>Pooja Singh</Text>
      </View>
      <FlatList
        data={[1]}
        // numColumns={2}
        // contentContainerStyle={styles?.flat}
        style={styles?.flatListStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <>
              <Banner />
              <View style={styles.flat}  >
                <FlatList
                  data={DummyData}
                  numColumns={2}
                  // style={styles.flat}
                  // columnWrapperStyle={styles.flat}
                  contentContainerStyle={styles?.flat}
                  renderItem={({ item }) => {
                    return (
                      <Data item={item} />
                    )
                  }}
                />
              </View>
              <OtherService />
            </>
          )
        }}
      />


    </LinearGradient>
  );
};

export default HomeAdvisorScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: height / 50,
  },
  scrollView: {
    paddingBottom: 20,
  },
  flatListStyle: {
    // backgroundColor: 'red',
    // height: height / 
  },
  slick: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '90%',
    height: 150,
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 20,
    alignSelf: 'center',
  },
  quarterCircle: {
    position: 'absolute',
    right: -height / 4,
    top: 70,
    width: height / 2.2,
    height: height / 2.2,
    borderRadius: height,
    zIndex: -10,
  },
  quarterCircleUpper: {
    zIndex: -20,
    position: 'absolute',
    right: -height / 2.6,
    top: -20,
    height: height / 1.6,
    width: height / 1.6,
    borderRadius: 500,
  },
  button: {
    backgroundColor: '#7856FF',
    width: '50%',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  flat: {
    height: height / 3.5,
    // backgroundColor: 'green'
  }
});
