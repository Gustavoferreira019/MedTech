import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '@rneui/themed';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export default function Presentation() {

      const navigation = useNavigation();

      const handlePacientePress = () =>{
            navigation.dispatch(StackActions.replace('PacientScreen'));
      }

      const handleProScPress = ()=>{
            navigation.dispatch(StackActions.replace('ProScreen'))
      }
      return (
            <View style={styles.container}>
                  <Image
                        source={require('../assets/img/techmed-icon.png')} />


                  <View style={{ alignItems: 'center' }}>
                        <Text style={styles.ptext}>TechMed</Text>
                        <Text style={styles.stext}>Saúde</Text>
                  </View>

                  <View style={{ marginTop: 100 }}>
                        <Button
                              title="Sou Profissional de Saúde"
                              buttonStyle={{
                                    backgroundColor: 'rgba(0, 61, 122, 1)',
                                    paddingVertical: 18,
                                    borderRadius: 10,
                              }}
                              containerStyle={{
                                    width: 300,
                                    marginHorizontal: 50,
                                    marginVertical: 20,
                              }}
                              onPress={handleProScPress}
                        />
                        <Button
                              title="Sou Paciente"
                              buttonStyle={{
                                    borderColor: 'rgba(78, 116, 289, 1)',
                                    paddingVertical: 18,
                                    borderRadius: 10,
                              }}
                              type="outline"
                              titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                              containerStyle={{
                                    width: 300,
                                    marginHorizontal: 50,
                                    marginVertical: 0,
                              }}
                              onPress={handlePacientePress}

                        />
                  </View>
            </View>

      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 1)'
      },
      ptext: {
            color: 'rgba(59, 190, 88, 1)',
            fontWeight: '600',
            fontSize: 52,
            fontStyle: 'italic',
      },
      stext: {
            color: 'rgba(0, 61, 122, 1)',
            fontWeight: '900',
            fontSize: 40,
            marginTop: -15,
      }
});