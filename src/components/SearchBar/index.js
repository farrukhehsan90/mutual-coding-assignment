import * as React from 'react';
import { View, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import style from "./style";

const SearchBar = ({ searchVal, onChangeText }) => {
    return <View style={style.searchSection}>
        <Ionicons style={style.searchIcon} name="search" size={20} color="#000" />
        <TextInput
            style={style.input}
            placeholder="Search"
            onChangeText={onChangeText}
            value={searchVal}
        />
    </View>
};

export default SearchBar;