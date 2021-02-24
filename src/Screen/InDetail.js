import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const InDetail = ({ route }) => {
    return(
        <WebView
            source={{ uri: route.params.website}}
            style={styles.webviewStyle}
        />
    );
};

const styles = StyleSheet.create({});

export default InDetail;