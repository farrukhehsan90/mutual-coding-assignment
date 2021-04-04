import * as React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Avatar from '../../../assets/avatar.png';
import style from "./style";

const UserDetails = ({ route: { params: { userDetail } } }) => {

    return <ScrollView>
        <View style={style.detailContainer}>
            <Image style={style.detailImage} source={Avatar} />
            <Text style={style.detailHeader}>Name</Text>
            <Text style={style.detailField}>{userDetail?.name}</Text>
            <Text style={style.detailHeader}>Username</Text>
            <Text style={style.detailField}>{userDetail?.username}</Text>
            <Text style={style.detailHeader}>Email</Text>
            <Text style={style.detailField}>{userDetail?.email}</Text>
            <Text style={style.detailHeader}>Website</Text>
            <Text style={style.detailField}>{userDetail?.website}</Text>
            <Text style={style.detailHeader}>Company</Text>
            <Text style={{ ...style.detailField, marginBottom: 8 }}>Name: {userDetail?.company?.name}</Text>
            <Text style={{ ...style.detailField, marginBottom: 8 }}>Catch Phrase: {userDetail?.company?.catchPhrase}</Text>
            <Text style={style.detailField}>BS: {userDetail?.company?.bs}</Text>
        </View>
    </ScrollView>
};

export default UserDetails;