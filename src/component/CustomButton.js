import React, { useEffect, useRef, useState } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Animated,
	TextInput,
	StyleSheet,
	Modal,
	ActivityIndicator,
	Pressable,
	ImageBackground,
} from 'react-native'
import { width } from '../res/string';
import { colors } from '../res/color';
import fonts from '../res/fonts';

const CustomButton = ({ title, onPress, style, textStyle }) => {
	return (
		<Pressable
			onPress={onPress}
			accessibilityRole={'button'}
			style={[
				{
					width: width / 1.1,
					height: width / 7.5,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: colors.primaryColor,
					borderRadius: 10,
				},
				style,
			]}
		>
			<Text style={[{ color: colors.white, fontFamily: fonts.PoppinsRegular }, textStyle]}>
				{title}
			</Text>
		</Pressable>
	);
};

export default CustomButton;
