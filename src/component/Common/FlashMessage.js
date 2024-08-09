/* eslint-disable prettier/prettier */
import { showMessage } from 'react-native-flash-message';

export function ShowErrorMessage(data) {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message: data,
        position: 'bottom',
        duration: 1500,

    });
}

export function ShowInfoMessage(data) {
    showMessage({
        type: 'info',
        icon: 'info',
        message: data,
        position: 'top',
        duration: 1500,
    });
}

export function ShowSuccessMessage(data) {
    showMessage({
        // autoHide: false,
        color: '#841584',
        type: 'success',
        icon: 'success',
        position: 'bottom',
        message: data,
    });
}

export function ShowNullTIme(data) {
    showMessage({
        // autoHide: false,
        color: 'transparent',
        position: 'top',
        message: data,
        duration: 0.1,
        style: {
            // backgroundColor: 'green',
            marginTop: -1000,
            height: 'auto',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: 50,
        },
    });
}

