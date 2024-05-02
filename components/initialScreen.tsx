import { View, Text,Image,StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function initialScreen() {
      return (
            <View style={styles.container}>
                  <Image
                        source={require('../assets/img/techmed-icon.png')} />
                  <View style={{ alignItems: 'center' }}>
                        <Text style={styles.ptext}>TechMed</Text>
                        <Text style={styles.stext}>Saúde</Text>
                  </View>
                  <StatusBar style="auto" />
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'rgba(0, 61, 122, 1)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      ptext:{
       color: 'rgba(59, 190, 88, 1)',
       fontWeight: '600',
       fontSize:52,
       fontStyle:'italic',
      },
      stext:{
        color: 'background: rgba(255, 255, 255, 1)',
        fontWeight: '600',
        fontSize:36,
        marginTop:-15,
       }

      })