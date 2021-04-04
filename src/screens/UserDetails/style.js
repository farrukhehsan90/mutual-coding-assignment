import { StyleSheet } from 'react-native';
import { screenWidth } from '../../constants/screen';

export default StyleSheet.create({
    detailContainer: {
        margin: 20
    },
    detailImage: {
        alignSelf: 'center',
        width: screenWidth / 100 * 50,
        height: screenWidth / 100 * 50,
        borderWidth: 1,
        borderRadius: 100
    },
    detailHeader: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        width: '80%',
        marginVertical: 15
    },
    detailField: {
        color: 'black',
        fontSize: 17,
        width: '80%'
    }
})