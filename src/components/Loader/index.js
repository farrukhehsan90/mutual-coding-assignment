import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import style from "./style";

const Loader = () => {
    return <View style={style.loaderContainer}>
        <ActivityIndicator size={40} color="#1a0049" />
    </View>
};

export default Loader;