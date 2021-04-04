import { StyleSheet } from 'react-native';
import { screenWidth } from '../../constants/screen';

export default StyleSheet.create({
    cardContainer: {
        borderColor: '#30195b',
        borderWidth: 1,
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12
    },
    cardSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleContainer: {
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        width: 180
    },
    usernameContainer: {
        color: '#282828',
        fontSize: 13,
        marginLeft: 10,
        textTransform: 'capitalize',
        width: 180
    },
    iconContainer: {
        padding: 10,
        backgroundColor: '#30195b',
        borderRadius: 30
    }
})