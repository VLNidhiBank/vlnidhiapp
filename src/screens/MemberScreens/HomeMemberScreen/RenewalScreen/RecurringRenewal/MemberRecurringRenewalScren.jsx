import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../../../component/CustomTextInput';
import CustomButton from '../../../../../component/CustomButton';
import { colors } from '../../../../../res/color';
import { height, width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';


const MemberRecurringRenewalScreen = () => {
  const [applicatName, setApplicatName] = useState("");
  const [relativeName, setRelativetName] = useState("");
  const [memberCode, setMemberCode] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [policyAmount, setPolicyAmount] = useState("");
  const [planCode, setPlanCode] = useState("");
  const [netDeposited, setNetDeposited] = useState("");
  const [amountDue, setAmountDue] = useState("");
  const [lastPaid, setLastPaid] = useState("");


  const [date, setDate] = useState("");
  const [branch, setBranch] = useState("");
  const [lateFine, setLateFine] = useState("");
  const [amount, setAmount] = useState("");
  const [payMode, setPayMode] = useState("");
  const [balance, setBalance] = useState("");
  const [remark, setRemark] = useState("");

  const data = [
    {
      title: 'Applicant Name',
      inputValue: applicatName,
      setInputValue: setApplicatName
    },
    {
      title: 'Relative Name',
      inputValue: relativeName,
      setInputValue: setRelativetName
    },
    {
      title: 'Member Code',
      inputValue: memberCode,
      setInputValue: setMemberCode
    },
    {
      title: 'Mobile No',
      inputValue: mobileNo,
      setInputValue: setMobileNo
    },
    {
      title: 'Policy Amount',
      inputValue: policyAmount,
      setInputValue: setPolicyAmount
    },
    {
      title: 'Plan Code',
      inputValue: planCode,
      setInputValue: setPlanCode
    },
    {
      title: 'Net Deposited',
      inputValue: netDeposited,
      setInputValue: setNetDeposited
    },
    {
      title: 'Amount Due',
      inputValue: amountDue,
      setInputValue: setAmountDue
    },
    {
      title: 'Last Inst. Paid',
      inputValue: lastPaid,
      setInputValue: setLastPaid
    },
  ];

  const detail = [
    {
      title: 'Entry Date',
      inputValue: date,
      setInputValue: setDate
    },
    {
      title: 'Entry Branch',
      inputValue: branch,
      setInputValue: setBranch
    },
    {
      title: 'Late Fine',
      inputValue: lateFine,
      setInputValue: setLateFine
    },
    {
      title: 'Amount',
      inputValue: amount,
      setInputValue: setAmount
    },
    {
      title: 'Pay Mode',
      inputValue: payMode,
      setInputValue: setPayMode
    },
    {
      title: 'Balance',
      inputValue: balance,
      setInputValue: setBalance
    },
    {
      title: 'Remarks',
      inputValue: remark,
      setInputValue: setRemark
    },
  ];

  const renderItem = ({ item }) => (
    <CustomTextInput
      inputData={{
        title: item.title,
        inputValue: item.inputValue,
        actionSecond: () => item.setInputValue(!item.inputValue),
        isId: item.inputValue
      }}
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

export default MemberRecurringRenewalScreen;

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
