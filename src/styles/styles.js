import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#151515',
        paddingTop: 20,
    },
    task: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        width: width * 0.9,
        minHeight: 80,
        borderRadius: 10,
        elevation: 5,
        marginVertical: 10,
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        borderRadius: 12,
        backgroundColor: '#df2b53',
        padding: 8,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white'
    },
    input: {
        width: width * 0.9,
        height: 40,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#df355b',
        marginBottom: 20,
        paddingHorizontal: 10,
        color: 'white',
    },
    button: {
        backgroundColor: '#312f2f',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        padding:20,
        width: width * 0.8,
    },
    navBar: {
        backgroundColor: '#312f2f',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: height * 0.1,
        width: width
      },
    navText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;