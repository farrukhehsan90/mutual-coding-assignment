import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { DetailCard, Loader, SearchBar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUsers, cleanState } from "../../store/actions/data";
import style from "./style";

const PostList = ({ navigation }) => {
    const [searchVal, setSearchVal] = useState('');
    const [searchPost, setSearchPost] = useState(null);
    const [loader, setLoader] = useState(false);
    const { posts, users, error } = useSelector(state => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cleanState());
        dispatch(getUsers());
        dispatch(getPosts());
    }, []);

    const handleSearch = text => {
        setLoader(true);
        setSearchVal(text);
        if (!!text) {
            setSearchPost([
                ...posts.filter(post =>
                    post.title.toLowerCase().startsWith(text.toLowerCase())
                    || users?.find(user => user.id === post.userId)?.name.toLowerCase().startsWith(text.toLowerCase())
                )
            ]);
        } else {
            setSearchPost(null);
        }
    }

    useEffect(() => {
        setLoader(false);
    }, [searchPost])

    return <>
        <SearchBar
            searchVal={searchVal}
            onChangeText={handleSearch}
        />
        <ScrollView>
            {(searchPost || posts)?.map(post => <DetailCard
                onCardPress={_ => navigation.navigate('PostDetails', {
                    postDetail: {
                        ...post,
                        username: users?.find(user => user.id === post.userId)?.name
                    }
                })}
                onIconPress={_ => navigation.navigate('UserDetails', {
                    userDetail: users?.find(user => user.id === post.userId)
                })}
                key={post.id}
                title={post.title}
                username={users?.find(user => user.id === post.userId)?.name}
            />)}
        </ScrollView>
        {(!posts.length || !users.length || loader) && <Loader />}
        {Array.isArray(searchPost) && !searchPost.length && <Text style={style.noTextContainer}>No Posts found</Text>}
    </>
};

export default PostList;