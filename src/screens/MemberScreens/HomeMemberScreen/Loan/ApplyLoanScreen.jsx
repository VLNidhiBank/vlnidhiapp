import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../../../../res/color'
import { height, width } from '../../../../res/string'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
// import { Call_Icon, StepFive_Icon, StepFour_Icon, StepOne_Icon, StepThree_Icon, StepTwo_Icon, Tick_Icon } from '../../../res/icons'
import FormInput from '../../../../component/Input/FormInput'
import StepTwo from '../../NewInvestment/StepTwo'
import StepThree from '../../NewInvestment/StepThree'
import fonts from '../../../../res/fonts'
import Spinner from '../../../../component/Spinner/Spinner'
import CustomButton from '../../../../component/CustomButton'
import StepOne from '../../NewInvestment/StepOne'
import { Call_Icon, Tick_Icon } from '../../../../res/icons'

const ApplyLoanScreen = () => {
    const [page, setPage] = useState(1);
    const [active, setActive] = useState(1);
    const [loacalLoading, setloacalLoading] = useState(false);
    const [PopUp, setPopUp] = useState(false);
    const [disableEdit, setdisableEdit] = useState();
    const [loading, setLoading] = useState(true);
    const [CTAModal, setCTAModal] = useState(false);
    const [ItemDetails, setItemDetails] = useState(false);

    const scrollViewRef = useRef();
    const navigation = useNavigation();

    const fillDetailSection = () => {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    };

    const OnNextFunction = () => {
        goNext(); fillDetailSection()
    };

    const FunctionForEdit = {
        setActive,
        setPage,
        active,
    };




    const Data = ({ item }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
                <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>{item.title}</Text>
                <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.subtitle}</Text>
            </View>
        )
    }



    //HER THE MAIN RENDER OF STEPWISE END


    const goNext = async () => {
        if (page === 5) {
            // FinalDataSave()
            return;
        }
        setPage(page => page + 1);
        if (page === 1) {
            setActive(active + 1);
        } else if (page === 2) {
            setActive(active + 1);
        } else if (page === 3) {
            setActive(active + 1);
        } 
    };

    const goToStepOne = () => {
        if (page === 2) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    const goToStepTwo = () => {
        if (page === 3) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    const goToStepThree = () => {
        if (page === 4) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    // const goToStepFour = () => {
    //     if (page === 5) {
    //         setPage(page => page - 1);
    //         setActive(active - 1);
    //     } else {
    //         return;
    //     }
    // };

    const userIdData = {
        title: 'Branch Code',
        palceHolderText: 'Password',
        // FirstIcon: Call_Icon,
        // inputValue: userId,
        changedText: (text) => setItemDetails(text),
    };

    const brannchData = {
        title: 'Branch Code',
        // palceHolderText: 'Password',
        // FirstIcon: Call_Icon,
        // inputValue: userId,
        changedText: (text) => setItemDetails(text),
    };

    const branchName = {
        title: 'Branch Name',
        // palceHolderText: 'Password',
        FirstIcon: Call_Icon,
        // inputValue: userId,
        changedText: (text) => setItemDetails(text),
    };



    const StepWiseComponent = () => {

        // Final API HIT FOR DATA SAVE

        return (
            <>
                <View>
                    {page === 1 ?
                        <>
                            {/* <StepOne ItemDetails={ItemDetails} /> */}
                            <StepOne />
                            {/* <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} /> */}
                            <CustomButton buttonTitle={'Next'} onPress={() => goNext()} />

                        </>
                        : page === 2 ?
                            <>
                                <View style={styles.ViewStepTwo} >
                                    <View>
                                        <StepTwo />
                                        {/* <StepTwo OnNextFunction={OnNextFunction} ItemDetails={ItemDetails} /> */}
                                    </View>
                                    {/* <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} /> */}
                                    <CustomButton buttonTitle={'Next'} onPress={() => goNext()} />

                                </View>
                            </>
                            : page === 3 ?

                                <>
                                    <StepThree />
                                    {/* <StepThree OnNextFunction={OnNextFunction} ItemDetails={ItemDetails} /> */}
                                    {/* <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} /> */}
                                    <CustomButton buttonTitle={'Next'} onPress={() => goNext()} />

                                </>
                                // : page === 4 ?
                                //     <>
                                //         <StepFour />
                                //         {/* <StepFour OnNextFunction={OnNextFunction} /> */}
                                //         {/* <FormButton buttonTitle="Next" onPress={() => { goNext(); fillDetailSection() }} style={styles.ButtonStyle} /> */}
                                //         <CustomButton buttonTitle={'Next'} onPress={() => goNext()} />

                                //     </>
                                //     : page === 5 ?
                                //         <>
                                //             <StepFive />
                                //             <View style={styles.BottomButton} >
                                //             <CustomButton buttonTitle={'Save'} onPress={() => goNext()} />
    
                                //                 {/* <StepFive FunctionForEdit={FunctionForEdit} ItemDetails={ItemDetails} /> */}
                                //                 {/* <FormButton buttonTitle="Save Inspection Details" onPress={() => {
                                //                 SaveItemAssessment()
                                //                 // prop?.setModalVisible(true)
                                //             }} style={styles.ButtonStyle} />
                                //             {
                                //                 PopUp === true ?
                                //                     <PaymentSuccessModal data={PopUpData} extraFunction={() => navigation.navigate(NavigationStrings.ASSESMENT_ITEMS)} RenderComp={(prop) => {
                                //                         prop?.setModalVisible(true)
                                //                         return (
                                //                             <>
                                //                             </>);
                                //                     }} />
                                //                     : null
                                //             } */}
                                //             </View>
                                //         </>

                                        : null
                    }


                </View>

            </>
        );
    };




    return (
        <View>
            <View style={styles?.upperArea} >
                <View style={styles?.firstArea} >
                    <FormInput inputData={brannchData} />
                </View>
                <View style={styles?.secondArea} >
                    <FormInput inputData={branchName} />
                </View>
            </View>

            <View style={styles.StepWiseWrapper} >
                {loacalLoading === true ? <Spinner style={{ height: height }} /> :

                    <View style={styles.StepProgressWrap} >
                        <View style={styles.ProgressLine}>
                            <View style={styles.OverStepLine}>
                                <View style={styles.StepLine}>
                                    <View style={[styles.StepLineOne,
                                    { backgroundColor: active > 1 ? colors.lightPrimaryColor : colors.greyColor },
                                    ]} />
                                    <View style={[styles.StepLineTwo,
                                    { backgroundColor: active > 2 ? colors.lightPrimaryColor : colors.greyColor },
                                    ]} />
                                    <View style={[styles.StepLineThree,
                                    { backgroundColor: active > 3 ? colors.lightPrimaryColor : colors.greyColor },
                                    ]} />
                                    <View style={[styles.StepLineFour,
                                    { backgroundColor: active > 4 ? colors.lightPrimaryColor : colors.greyColor },
                                    ]} />
                                </View>
                            </View>

                            {active === 1 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} onPress={goToStepOne}>
                                        <Tick_Icon width={width / 15} height={width / 15} />
                                    </View>
                                </View>
                            ) : (

                                <View style={styles.StepNameAndCircle} >
                                    <Pressable style={[styles.StepCircleTouch, { backgroundColor: active > 1 ? colors.backCircleColor : colors.greyColor }]} onPress={goToStepOne}>
                                        <Tick_Icon width={width / 15} height={width / 15} />
                                    </Pressable>
                                </View>
                            )}
                            {active === 2 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} onPress={goToStepTwo}>
                                        <Tick_Icon width={width / 15} height={width / 15} />
                                    </View>
                                </View>
                            ) : (
                                <View style={styles.StepNameAndCircle} >
                                    <Pressable style={[styles.StepCircleTouch, { backgroundColor: active > 1 ? colors.backCircleColor : colors.greyColor }]} onPress={goToStepTwo}>
                                        <Tick_Icon width={width / 15} height={width / 15} />
                                    </Pressable>
                                </View>
                            )}
                            {active === 3 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} onPress={goToStepThree}>
                                        <Tick_Icon width={width / 15} height={width / 15} />

                                    </View>
                                </View>
                            ) : (
                                <View style={styles.StepNameAndCircle} >
                                    <Pressable style={[styles.StepCircleTouch, { backgroundColor: active > 2 ? colors.backCircleColor : colors.greyColor }]} onPress={goToStepThree}>
                                        <Tick_Icon width={width / 15} height={width / 15} />

                                    </Pressable>
                                </View>
                            )}
                            {/* {active === 4 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} >
                                        <Tick_Icon width={width / 15} height={width / 15} />

                                    </View>
                                </View>
                            ) : (
                                <View style={styles.StepNameAndCircle} >
                                    <Pressable style={[styles.StepCircleTouch, { backgroundColor: active > 3 ? colors.backCircleColor : colors.greyColor }]} onPress={goToStepFour} >
                                        <Tick_Icon width={width / 15} height={width / 15} />

                                    </Pressable>
                                </View>
                            )}
                            {active === 5 ? (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={styles.StepCircleTouchActive} >
                                        <Tick_Icon width={width / 15} height={width / 15} />
                                    </View>
                                </View>
                            ) : (
                                <View style={styles.StepNameAndCircle} >
                                    <View style={[styles.StepCircleTouch, { backgroundColor: active > 4 ? colors.backCircleColor : colors.greyColor }]} >
                                        <Tick_Icon width={width / 15} height={width / 15} />
                                    </View>
                                </View>
                            )} */}
                        </View>

                    </View>
                }

                <FlatList
                    ListFooterComponent={() => (
                        <>
                            <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, alignSelf: 'stretch', marginBottom: 20, paddingBottom: 20, backgroundColor: colors.whiteBlueColor, }} ref={scrollViewRef} onContentSizeChange={() => fillDetailSection}>

                                <View style={styles.StepContentView}>
                                    <View style={styles.PageContent} >
                                        {page === 1 &&
                                            <StepWiseComponent />
                                        }
                                        {page === 2 &&
                                            <StepWiseComponent />
                                        }
                                        {page === 3 &&
                                            <StepWiseComponent />
                                        }
                                        {/* {page === 4 &&
                                            <StepWiseComponent />
                                        }
                                        {page === 5 &&
                                            <StepWiseComponent />
                                        } */}
                                    </View>
                                </View>
                            </ScrollView>

                        </>
                    )}
                    contentContainerStyle={styles.ScrollView}
                    showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} />
            </View>

        </View>
    )
}

export default ApplyLoanScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        // width: width * 0.95,
        borderRadius: 20,
        backgroundColor: colors?.white,
        // alignSelf: "center",
        marginTop: "4%",
        paddingHorizontal: width / 15,
        paddingVertical: width / 30,
    },
    StepWiseWrapper: {
        marginBottom: 10,
        // height: '100%',
        // backgroundColor: 'pink',
    },
    StepProgressWrap: {
        paddingTop: 10,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        // marginBottom: 20,
        justifyContent: 'center',
        height: height / 10,
        alignItems: 'center',
    },
    ProgressLine: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: '70%',
        width: '85%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        top: 0,
    },
    OverStepLine: {
        width: '100%',
        height: '3%',
        position: 'absolute',
        backgroundColor: 'beige',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    StepLine: {
        backgroundColor: 'skyblue',
        height: '100%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    StepLineOne: {
        // backgroundColor: 'red',
        height: '100%',
        margin: 2,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        alignItems: 'center',
        // position: 'absolute',
        width: '25%',
        // top: '100%',
        // zIndex: 5,
    },
    StepLineTwo: {
        backgroundColor: 'green',
        height: '100%',
        margin: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // position: 'absolute',
        width: '25%',
        // zIndex: 5,
    },
    StepLineThree: {
        backgroundColor: 'purple',
        height: '100%',
        margin: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // position: 'absolute',
        width: '25%',
        // zIndex: 5,
    },
    StepLineFour: {
        // backgroundColor: 'yellow',
        height: '100%',
        margin: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // position: 'absolute',
        width: '25%',
        // zIndex: 5,
    },
    StepNameAndCircle: {
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        // width:'20%' ,
        height: '100%',
    },
    StepCircleTouchActive: {
        backgroundColor: colors.primaryColor,
        // marginTop: 10,
        width: width / 10,
        height: width / 10,
        borderRadius: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%',
        // borderColor: '#FFF',
        // borderWidth: 3,
    },
    UpperCircle: {
        // backgroundColor: "transparent",
        width: width / 10,
        height: width / 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: '#AE282E',
        borderWidth: 3,
    },
    StepTextActive: {
        // backgroundColor: 'pink',
        position: 'absolute',
        color: colors.black,
        width: '300%',
        alignSelf: 'center',
        // top: -10,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: fonts.PoppinsSemiBold,
        marginBottom: 5,
    },
    StepText: {
        // backgroundColor: 'red',
        color: colors.greyColor,
        position: 'absolute',
        fontSize: 12,
        width: '300%',
        alignSelf: 'center',
        top: -10,
        textAlign: 'center',
        fontFamily: fonts.PoppinsSemiBold,
        lineHeight: 20,
    },
    StepCircleTouch: {
        // marginTop: 10,
        backgroundColor: '#004A7F',
        width: width / 10,
        height: width / 10,
        borderRadius: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: '5%',
    },
    StepContentView: {
        // height: '100%',
        paddingBottom: height/2.5,
        paddingHorizontal: width /40,
        // backgroundColor: 'red',
        // padding: 0 5% 15% 5%,
    },
    PageContent: {
        flex:1,
    // paddingVertical: 10,
    // paddingHorizontal: 0,
        // maxHeight: '100%',
        // backgroundColor: 'red'
    },
    TextColor: {
        fontSize: 14,
        paddingVertical: 10,
        color: colors.primaryColor,
        fontFamily: fonts.PoppinsMedium,
    },
    MediaWrapper: {
        width: '100%',
        height: '100%',
    },
    ImageView: {
        width: '100%',
        justifyContent: 'space-around',
        height: '70%',
        // flexGrow : 1,
    },
    touchImage: {
        width: width / 2.2,
        height: '100%',
        marginRight: 10,
        borderRadius: 5,
    },
    addIMageView: {
        width: width / 2.2,
        height: '55%',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 5,
    },
    ADDtouchImage: {
        backgroundColor: '#E8EFF5',
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    addImageStyle: {
        backgroundColor: '#E8EFF5',
    },
    ImageWrapper: {
        width: '100%',
        flex: 1,
        height: height / 1.7,
    },
    TotalMediaWrapper: {
        width: '100%',
    },
    ImageHeadingText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        lineHeight: 24,
        color: '#155B9F',
        paddingVertical: 10,
    },
    TextInputStyles: {
        height: 50,
        backgroundColor: '#fff',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#000',
        borderColor: 'rgba(0, 110, 233, 0.2)',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: 'rgba(0, 110, 233, 0.02)',
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.25,

    },
    RemarkInput: {
        backgroundColor: '#fff',
        padding: 5,
        width: '100%',
        height: 100,
        fontSize: 18,
        color: '#000',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
    },
    TextView: {
        marginBottom: 10,
    },
    TextStyle: {
        color: colors.primaryColor,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsSemiBold,
        paddingVertical: 5,
    },
    InvoiceCode: {
        color: colors.primaryColor,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: fonts.PoppinsMedium,
        paddingVertical: 10,
    },
    ViewStepTwo: {
        // height: height / 1.2,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
    },
    BottomButton: {
        marginBottom: 100,
    },
    upperArea: {
        // backgroundColor: 'green',
        flexDirection: 'row',

    },
    firstArea: {
        width: width / 2,
        paddingHorizontal: width / 20,
    },
    secondArea: {
        paddingHorizontal: width / 20,
        width: width / 2,

    },



});