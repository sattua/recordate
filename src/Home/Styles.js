import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a2ceae'
    },
    homeColumn:{
        marginLeft: 5, 
        marginRight: 5, 
        paddingBottom: 40
    },
    homeColLeft:{
        backgroundColor: '#c2c1f5',
        width:200
    },
    homeColRight:{
        backgroundColor: '#f3e1ca',
        width:200
    },
    homeColHeader:{
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },
    homeColHeaderText:{
        fontWeight:"bold"
    }
});

  export default Styles;