import React, { useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../store/actions/data";
import { CommentCard } from "../../components";
import PostImage from '../../../assets/post.jpeg';
import style from "./style";

const PostDetails = ({ route: { params: { postDetail } } }) => {
    const { comments, error } = useSelector(state => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments({ postId: postDetail.id }));
    }, []);

    return <ScrollView>
        <View style={style.detailContainer}>
            <Image style={style.detailImage} source={PostImage} />
            <Text style={style.detailHeader}>Title</Text>
            <Text style={style.detailField}>{postDetail.title}</Text>
            <Text style={style.detailHeader}>Body</Text>
            <Text style={style.detailField}>{postDetail.body}</Text>
            <Text style={style.detailHeader}>Author</Text>
            <Text style={style.detailField}>{postDetail.username}</Text>
            <Text style={style.detailHeader}>Comments</Text>
            {comments?.map(comment => {
                return <CommentCard
                    key={comment.id}
                    title={comment.name}
                    email={comment.email}
                    body={comment.body}
                />
            })}
        </View>
    </ScrollView>
};

export default PostDetails;