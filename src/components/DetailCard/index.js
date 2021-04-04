import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PostImage from '../../../assets/post.jpeg';
import { Ionicons } from '@expo/vector-icons';
import style from "./style";

const DetailCard = ({ title, username, onCardPress, onIconPress }) => {
    return <TouchableOpacity style={style.cardContainer} onPress={onCardPress}>
        <View style={style.cardSubContainer}>
            <Image source={PostImage} style={{ width: 60, height: 60 }} />
            <View>
                <Text numberOfLines={1} style={style.titleContainer}>{title}</Text>
                <Text numberOfLines={1} style={style.usernameContainer}>{username}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={onIconPress} style={style.iconContainer}>
            <Ionicons name="person" size={20} color="#fff" />
        </TouchableOpacity>
    </TouchableOpacity>
};

export default DetailCard;