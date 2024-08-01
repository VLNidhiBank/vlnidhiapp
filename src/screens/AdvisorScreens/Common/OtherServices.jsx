import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../../res/string';
import { Back_Icon, Bank_Icon, Calculator_Icon, CardPost_Icon, History_Icon, IntraTransfer_Icon, Personalcard_Icon, RegularEmi_Icon, VLBank_Icon, Wallet_Icon, WalletAdd_Icon, WalletSearch_Icon } from '../../../res/icons';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../../res/fonts';
import { colors } from '../../../res/color';
import { FlatList } from 'react-native-gesture-handler';
import ScreenConstants from '../../../Navigators/ScreenConstants';
import { useNavigation } from '@react-navigation/native';

const OtherService = () => {
  const navigation = useNavigation();

  // const [ balance, setBalance ] = useState(false);

  const DummyData = [
    { id: 1, icon: Wallet_Icon, title: "New Investment", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#4338CA", color2: "#6366F1", actionNavigation: () => {navigation.navigate(ScreenConstants.ADVISOR_NEW_INVESTMENT_SCREEN)} },
    { id: 2, icon: WalletAdd_Icon, title: "Renewals", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#1F2937", color2: "#4B5563", actionNavigation: () => {navigation.navigate(ScreenConstants.ADVISOR_RENEWALS_SCREEN)}},
    { id: 3, icon: RegularEmi_Icon, title: "Regular EMI", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#3B82F6", color2: "#93C5FD", actionNavigation: () => {navigation.navigate(ScreenConstants.ADVISOR_NEW_INVESTMENT_SCREEN)} },
    { id: 4, icon: RegularEmi_Icon, title: "Irregular EMI", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#7A5AF8", color2: "#A78BFA", actionNavigation: () => {navigation.navigate(ScreenConstants.ADVISOR_NEW_INVESTMENT_SCREEN)} },
    { id: 5, icon: Bank_Icon, title: "All Account", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#22C55E", color2: "#86EFAC", actionNavigation: () => {navigation.navigate(ScreenConstants.ADVISOR_ALL_ACCOUNT_STATEMENT_SCREEN)} },
    { id: 6, icon: Personalcard_Icon, title: "Member Summary", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#EC4899", color2: "#E879F9", actionNavigation: () => {navigation.navigate(ScreenConstants.ADVISOR_NEW_INVESTMENT_SCREEN)} },
    { id: 7, icon: Wallet_Icon, title: "My Incentive", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#881337", color2: "#AE4666", actionNavigation: () => {navigation.navigate(ScreenConstants.ADVISOR_NEW_INVESTMENT_SCREEN)}},
    { id: 8, icon: Calculator_Icon, title: "Calculator", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#FACC15", color2: "#FEF08A", actionNavigation: () => {navigation.navigate(ScreenConstants.ADVISOR_NEW_INVESTMENT_SCREEN)} },
  ]


  const DisplayCard = ({ item }) => {
    return (
      <>
        <Pressable onPress={() => { item?.actionNavigation() }}>
          <LinearGradient
            colors={[item?.color1, item?.color2]}
            style={styles.header}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.headerContent}>
              <item.icon height={height / 15} width={width / 6} />
              <View style={styles.textContainer}>
                <Text style={styles.headerTitle}>{item?.title}</Text>
                <Text style={styles.headerSubtitle}>{item?.subtitle}</Text>
              </View>
              <View style={styles.backIconContainer}>
                <Back_Icon height={height / 10} width={width / 12} />
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      </>
    )
  }

  return (
      <View style={styles.mainContainer}>
        <FlatList
          data={DummyData}
          contentContainerStyle={styles?.flatlistStyles}
          renderItem={({ item }) => {
            return (
              <DisplayCard item={item} />
            )
          }
          }
        />
      </View>
  );
};

export default OtherService;

const styles = StyleSheet.create({
  upperWrapper: {
    height: height / 4,
  },
  content: {
    width: width,
    // height:height/2,
    backgroundColor: "#D9D9D9",
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    borderRadius: 14,
    justifyContent: "center",
    marginVertical: width / 35,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fonts?.PoppinsSemiBold,
    color: colors?.white,
    marginVertical: 5,
  },
  headerSubtitle: {
    fontSize: 10,
    fontFamily: fonts?.PoppinsRegular,
    color: colors?.white,
  },
  backIconContainer: {
    marginLeft: "5%",
  },
  flatlistStyles: {
    // backgroundColor: 'red',
    // marginTop: width / 60,
    paddingBottom: width / 3,
    // paddingHorizontal: width / 20,

  },
  mainContainer: {
    // backgroundColor: 'red',
    // paddingVertical: width / 40,
    // marginBottom: "50%",
  },
  heading: {
    borderRadius: 14,
    justifyContent: "center",
    // marginTop:"3%",
    // marginVertical: width / 35,
    paddingHorizontal: width/20,
    paddingVertical:width/25,
    // margin:"5%"
  }
});
