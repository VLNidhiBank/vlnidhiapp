import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../../res/string';
import { Back_Icon, Bank_Icon, Calculator_Icon, CardPost_Icon, History_Icon, IntraTransfer_Icon, Personalcard_Icon, RegularEmi_Icon, VLBank_Icon, Wallet_Icon, WalletAdd_Icon, WalletSearch_Icon } from '../../../res/icons';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../../res/fonts';
import { colors } from '../../../res/color';
import { FlatList } from 'react-native-gesture-handler';
import ScreenConstants from '../../../Navigators/ScreenConstants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { memberDetails } from '../../../stores/MemberAPI/memberData/memberDataSlice';

const HomeMemberScreen = () => {
  const navigation = useNavigation();

  const [balance, setBalance] = useState(false);

  const DummyData = [
    { id: 1, icon: History_Icon, title: "Transaction History", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#CABB38", color2: "#E0C978", actionNavigation: () => navigation?.navigate(ScreenConstants.TRANSACTION_MEMBER_SCREEN) },
    { id: 2, icon: Wallet_Icon, title: "New Investment", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#4338CA", color2: "#6366F1", actionNavigation: () => navigation?.navigate(ScreenConstants.NEW_INVESTMENT_SCREEN) },
    { id: 3, icon: WalletAdd_Icon, title: "Renewals", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#1F2937", color2: "#4B5563", actionNavigation: () => { navigation.navigate(ScreenConstants.RENEWAL_SCREEN) } },
    { id: 4, icon: CardPost_Icon, title: "Apply Loan", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#4F46E5", color2: "#8B5CF6", actionNavigation: () => { navigation.navigate(ScreenConstants.APPLYLOAN_SCREEN) } },
    { id: 5, icon: RegularEmi_Icon, title: "Regular EMI", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#3B82F6", color2: "#93C5FD", actionNavigation: () => { navigation.navigate(ScreenConstants.REGULAR_EMI_SCREEN) } },
    { id: 6, icon: RegularEmi_Icon, title: "Irregular EMI", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#7A5AF8", color2: "#A78BFA", actionNavigation: () => console?.log('Here') },
    { id: 7, icon: Bank_Icon, title: "All Account", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#22C55E", color2: "#86EFAC", actionNavigation: () => { navigation.navigate(ScreenConstants.ACCOUNT_SCREEN) } },
    { id: 8, icon: Personalcard_Icon, title: "Member Summary", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#EC4899", color2: "#E879F9", actionNavigation: () => { navigation.navigate(ScreenConstants.MEMBERSUMMARY_SCREEN) } },
    { id: 9, icon: WalletSearch_Icon, title: "Utility Bill Payment", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#F97316", color2: "#FDBA74", actionNavigation: () => { navigation.navigate(ScreenConstants.UTILITYBILLPAYMENT_SCREEN) } },
    { id: 10, icon: Calculator_Icon, title: "Calculator", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#FACC15", color2: "#FEF08A", actionNavigation: () => { navigation.navigate(ScreenConstants.CALCULATOR_SCREEN) } },
    { id: 11, icon: Wallet_Icon, title: "Virtual Account", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#881337", color2: "#AE4666", actionNavigation: () => { navigation.navigate(ScreenConstants.VIRTUALACCOUNT_SCREEN) } },
    { id: 12, icon: IntraTransfer_Icon, title: "Intra Transfer", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#C026D3", color2: "#E879F9", actionNavigation: () => { navigation.navigate(ScreenConstants.INTRATRANSFER_SCREEN) } },
    { id: 13, icon: Wallet_Icon, title: "NEFT/IMPS", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#9333EA", color2: "#A855F7", actionNavigation: () => { navigation.navigate(ScreenConstants.NEFT_SCREEN) } },
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
    <View style={styles.container}>
      <View style={styles?.upperWrapper} >
        <Pressable style={styles.iconContainer} onPress={() => { navigation.navigate(ScreenConstants?.MEMBER_PROFILE_SCREEN) }}>
          <VLBank_Icon height={height / 13} width={width / 10} />
        </Pressable>
        <View style={styles.content}><Text>Banner</Text></View>
      </View>
      <View style={styles.mainContainer}>
        <FlatList
          data={DummyData}
          ListHeaderComponent={
            <LinearGradient
              colors={['#171F67', '#2E3ECD']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.heading}>
              <Text style={{ fontSize: 12, fontFamily: fonts?.PoppinsSemiBold, color: colors?.white }}>My Account Deatils</Text>
              <View style={{ alignItems: "center", alignSelf: "center" }}>
                <Text style={{ fontSize: 11, fontFamily: fonts?.PoppinsRegular, color: colors?.white }}>Name: Person Name</Text>
                <Text style={{ fontSize: 11, fontFamily: fonts?.PoppinsRegular, color: colors?.white }}>A/c No.: 12345678987</Text>

                <Pressable style={{ borderRadius: 10, borderWidth: 1, borderColor: colors?.white, padding: "2%", }} onPress={() => { setBalance(true) }}>
                  {!balance ? <Text style={{ fontSize: 11, fontFamily: fonts?.PoppinsSemiBold, color: colors?.white }}>View Balance</Text> : <Text style={{ fontSize: 11, fontFamily: fonts?.PoppinsSemiBold, color: colors?.white }}>₹ 1000</Text>}
                </Pressable>
              </View>
            </LinearGradient>
          }
          contentContainerStyle={styles?.flatlistStyles}
          renderItem={({ item }) => {
            return (
              <DisplayCard item={item} />
            )
          }
          }
        />
      </View>
    </View>
  );
};

export default HomeMemberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  iconContainer: {
    width: "100%",
    height: "25%",
    paddingHorizontal: 10,
  },
  upperWrapper: {
    height: height / 4,
    // backgroundColor: 'red',
  },
  content: {
    width: width,
    height: "75%",
    backgroundColor: "#D9D9D9",
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    borderRadius: 14,
    justifyContent: "center",
    // marginTop:"3%",
    marginVertical: width / 35,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
  },
  textContainer: {
    // marginLeft: "5%",
    flex: 1,
    // backgroundColor: 'red'
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
    marginTop: width / 60,
    paddingBottom: width / 3,
    paddingHorizontal: width / 20,

  },
  mainContainer: {
    // backgroundColor: 'red',
    paddingVertical: width / 40,
    marginBottom: "50%",
  },
  heading: {
    borderRadius: 14,
    justifyContent: "center",
    // marginTop:"3%",
    // marginVertical: width / 35,
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
    // margin:"5%"
  }
});
