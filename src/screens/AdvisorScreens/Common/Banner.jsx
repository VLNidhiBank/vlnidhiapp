import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { height, width } from '../../../res/string';
import fonts from '../../../res/fonts';
import { colors } from '../../../res/color';
import Slick from 'react-native-slick';

const cardData = [
    {
        title: 'Till Date Balance',
        amount: '₹ 21,956.0/-',
        buttonLabel: 'View Balance',
        backgroundColor: '#633EF8',
        quarterCircleColor: '#7856FF',
        upperQuarterCircleColor: '#8567FF',
        buttonColor: "#7856FF"
    },
    {
        title: 'Till Date Balance',
        amount: '₹ 21,956.0/-',
        buttonLabel: 'View Balance',
        backgroundColor: '#231A28',
        quarterCircleColor: '#312437',
        upperQuarterCircleColor: '#392A41',
        buttonColor: "#312437"
    },
    {
        title: 'Till Date Balance',
        amount: '₹ 21,956.0/-',
        buttonLabel: 'View Balance',
        backgroundColor: '#643D41',
        quarterCircleColor: '#76474C',
        upperQuarterCircleColor: '#7E5055',
        buttonColor: "#76474C"
    },
    {
        title: 'Till Date Balance',
        amount: '₹ 21,956.0/-',
        buttonLabel: 'View Balance',
        backgroundColor: '#253939',
        quarterCircleColor: '#283F3F',
        upperQuarterCircleColor: '#305151',
        buttonColor: "#283F3F"
    },
    // Add more card objects as needed
];
const Banner = () => {

    return (
        <View style={styles.sliderContainer}>
            <Slick
                style={styles.slick}
                showsPagination={false}
                showsButtons={false}
                // loop={true}
                autoplay={true}
                speed={1000}
            >
                {/* <View contentContainerStyle={styles.scrollView}> */}
                {cardData.map((card, index) => (
                    <View key={index} style={[styles.cardContainer, { backgroundColor: card.backgroundColor }]}>
                        <View style={{ paddingHorizontal: width / 10, paddingVertical: width / 10 }}>
                            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsMedium, color: colors?.white }}>{card.title}</Text>
                            <Text style={{ fontSize: 24, fontFamily: fonts?.PoppinsBold, color: colors?.white }}>{card.amount}</Text>
                            <View style={styles.button}>
                                <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsMedium, color: colors?.white }}>{card.buttonLabel}</Text>
                            </View>
                        </View>
                        <View style={[styles.quarterCircleUpper, { backgroundColor: card.upperQuarterCircleColor }]} />
                        <View style={[styles.quarterCircle, { backgroundColor: card.quarterCircleColor }]} />
                    </View>
                ))}
            </Slick>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    sliderContainer: {
        height: height /5.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slick: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: '100%',
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
        backgroundColor: cardData.buttonColor,
        width: '50%',
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
    },
});