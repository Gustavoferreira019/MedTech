import React from 'react';
import { StyleSheet, Image, View,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
    const handleArrowBack = () => {
        navigation.dispatch(StackActions.replace('InitialPatient'));
  }
    return (
        <View style={styles.container}>
            <View style={{
                height: 35, width: 35, display: 'flex', alignItems: 'center',
                position: 'absolute', top: 50, left: 30,
            }}>
                <TouchableOpacity onPress={handleArrowBack}>
                    <FontAwesomeIcon icon={faArrowLeft} size={30} color="rgba(0, 255, 255, 0.82)" />
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/img/Frame.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});