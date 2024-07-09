import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../../res/string';
import { Back_Icon, Bank_Icon, Calculator_Icon, CardPost_Icon, IntraTransfer_Icon, Personalcard_Icon, RegularEmi_Icon, VLBank_Icon, Wallet_Icon, WalletAdd_Icon, WalletSearch_Icon } from '../../../res/icons';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../../res/fonts';
import { colors } from '../../../res/color';
import { FlatList } from 'react-native-gesture-handler';
import ScreenConstants from '../../../Navigators/ScreenConstants';
import { useNavigation } from '@react-navigation/native';

const HomeMemberScreen = () => {
  const navigation = useNavigation();

  const DummyData = [
    { id: 1, icon: Wallet_Icon, title: "New Investment", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#4338CA", color2: "#6366F1", actionNavigation: () => console?.log('Here') },
    { id: 2, icon: WalletAdd_Icon, title: "Renewals", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#1F2937", color2: "#4B5563", actionNavigation: () => console?.log('Here') },
    { id: 3, icon: CardPost_Icon, title: "Apply Loan", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#4F46E5", color2: "#8B5CF6", actionNavigation: () => console?.log('Here') },
    { id: 4, icon: RegularEmi_Icon, title: "Regular EMI", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#3B82F6", color2: "#93C5FD", actionNavigation: () => console?.log('Here') },
    { id: 5, icon: RegularEmi_Icon, title: "Irregular EMI", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#7A5AF8", color2: "#A78BFA", actionNavigation: () => console?.log('Here') },
    { id: 6, icon: Bank_Icon, title: "All Account", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#22C55E", color2: "#86EFAC", actionNavigation: () => console?.log('Here') },
    { id: 7, icon: Personalcard_Icon, title: "Member Summary", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#EC4899", color2: "#E879F9", actionNavigation: () => console?.log('Here') },
    { id: 8, icon: WalletSearch_Icon, title: "Utility Bill Payment", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#F97316", color2: "#FDBA74", actionNavigation: () => console?.log('Here') },
    { id: 9, icon: Calculator_Icon, title: "Calculator", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#FACC15", color2: "#FEF08A", actionNavigation: () => console?.log('Here') },
    { id: 10, icon: Wallet_Icon, title: "Virtual Account", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#881337", color2: "#AE4666", actionNavigation: () => console?.log('Here') },
    { id: 11, icon: IntraTransfer_Icon, title: "Intra Transfer", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#C026D3", color2: "#E879F9", actionNavigation: () => console?.log('Here') },
    { id: 12, icon: Wallet_Icon, title: "NEFT/IMPS", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", color1: "#9333EA", color2: "#A855F7", actionNavigation: () => console?.log('Here') },
  ]


  const DisplayCard = ({ item }) => {
    return (
      <LinearGradient
        colors={[item?.color1, item?.color2]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <item.icon height={height / 12} width={width / 6} />
          <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>{item?.title}</Text>
            <Text style={styles.headerSubtitle}>{item?.subtitle}</Text>
          </View>
          <View style={styles.backIconContainer}>
            <Back_Icon height={height / 10} width={width / 12} />
          </View>
        </View>
      </LinearGradient>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles?.upperWrapper} >
        <Pressable style={styles.iconContainer} onPress={()=>{navigation.navigate(ScreenConstants?.MEMBER_PROFILE_SCREEN)}}>
          <VLBank_Icon height={height / 13} width={width / 10} />
        </Pressable>
        <View style={styles.content}><Text>Banner</Text></View>
      </View>
      <View style={styles.mainContainer}>
        <FlatList
          data={DummyData}
          //style
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
    height: height / 3,
    // backgroundColor: 'red'
  },
  content: {
    width: width,
    height: "75%",
    backgroundColor: "#D9D9D9",
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: height / 7,
    borderRadius: 14,
    justifyContent: "center",
    alignSelf: "center",
    // marginTop:"3%",
    marginVertical: width / 35,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
  },
  textContainer: {
    marginLeft: "5%",
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: fonts?.PoppinsSemiBold,
    color: colors?.white,
  },
  headerSubtitle: {
    fontSize: 10,
    fontWeight: "300",
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
    paddingHorizontal: width / 30,

  },
  mainContainer: {
    // backgroundColor: 'red',
    paddingVertical: width / 40,
    marginBottom: "50%",
  },
});
