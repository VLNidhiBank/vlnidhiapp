import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../../../component/CustomTextInput';
import CustomButton from '../../../../../component/CustomButton';
import { colors } from '../../../../../res/color';
import { height, width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';


const MemberAnyAmountScreen = () => {
  const [applicatName, setApplicatName] = useState("");
  const [relativeName, setRelativetName] = useState("");
  const [memberCode, setMemberCode] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [policyAmount, setPolicyAmount] = useState("");
  const [planCode, setPlanCode] = useState("");
  const [netDeposited, setNetDeposited] = useState("");

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [payMode, setPayMode] = useState("");
  const [remark, setRemark] = useState("");


  const data = [
    {
      title: 'Applicant Name',
      value: applicatName,
      onChangeText: setApplicatName
    },
    {
      title: 'Relative Name',
      value: relativeName,
      onChangeText: setRelativetName
    },
    {
      title: 'Member Code',
      value: memberCode,
      onChangeText: setMemberCode
    },
    {
      title: 'Mobile No',
      value: mobileNo,
      onChangeText: setMobileNo
    },
    {
      title: 'Policy Amount',
      value: policyAmount,
      onChangeText: setPolicyAmount
    },
    {
      title: 'Plan Code',
      value: planCode,
      onChangeText: setPlanCode
    },
    {
      title: 'Net Deposited',
      value: netDeposited,
      onChangeText: setNetDeposited
    },
  ];

  const detail = [
    {
      title: 'Entry Date',
      value: date,
      onChangeText: setDate
    },
    {
      title: 'Entry Branch',
      value: name,
      onChangeText: setName
    },
    {
      title: 'Amount',
      value: amount,
      onChangeText: setAmount
    },
    {
      title: 'Pay Mode',
      value: payMode,
      onChangeText: setPayMode
    },
    {
      title: 'Remark',
      value: remark,
      onChangeText: setRemark
    },
  ];

  const renderItem = ({ item }) => (
    <CustomTextInput
      title={item.title}
      placeholder={`Enter ${item.title}`}
      value={item.value}
      onChangeText={item.onChangeText}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.selectPolicyText}>Select policy No</Text>
        <View style={styles.input}>
        </View>
      </View>
      <FlatList
        data={[1]}
        ListHeaderComponent={() => (
          <>
            <View style={styles.mainContainer}>
              <Text style={styles.policyDetailsText}>Policy Details</Text>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
              />
            </View>
            <View style={styles.mainContainer}>
              <Text style={styles.policyDetailsText}>Entry Details</Text>
              <FlatList
                data={detail}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
              />
               <View style={{borderRadius: 10, backgroundColor:colors?.white, borderColor:colors?.primaryColor, borderWidth:1, width: width*0.85, height: height/14, alignItems:"center", alignSelf:"center", justifyContent:"center"}}>
                <Text style={{fontSize:14, fontFamily:fonts?.PoppinsSemiBold, color:colors?.primaryColor, }}>View Statement</Text>
              </View>
              <CustomButton buttonTitle={"Save"} />
            </View>
          </>
        )}
      />
    </View>
  );
}

export default MemberAnyAmountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
  },
  input: {
    backgroundColor: colors?.white,
    borderRadius: 10,
    margin: "2%",
    height: height / 15,
  },
  mainContainer: {
    borderRadius: 10,
    backgroundColor: colors?.white,
    margin: "2%",
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
  },
  selectPolicyText: {
    fontSize: 14,
    fontFamily: fonts?.PoppinsRegular,
    color: colors?.black,
  },
  policyDetailsText: {
    fontSize: 18,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
});
