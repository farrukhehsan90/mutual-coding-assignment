import * as React from 'react';
import { View, Text } from 'react-native';
import style from "./style";

const CommentCard = ({ title, email, body }) => {
    return <View style={style.commentContainer}>
        <Text style={style.commentTitle}>{title}</Text>
        <Text style={style.commentEmail}>{email}</Text>
        <Text>{"\n"}</Text>
        <Text style={style.commentBody}>{body}</Text>
    </View>
};

export default CommentCard;