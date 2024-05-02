import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Input, Icon } from '@rneui/themed';

interface Props {
      clickPreviousPro: () => void;
}


export default function ProScreen(props:Props) {
      return (
            <View style={styles.container}>

                  <Icon
                        name='arrow-left'
                        type='font-awesome'
                        containerStyle={{ marginRight: 340, marginBottom: 30 }}
                        onPress={props.clickPreviousPro}
                        iconStyle={{ color: 'rgba(255, 255, 255, 1)' }}
                  />
                  <Image
                        source={require('../assets/img/techmed-icon.png')} />


                  <View style={{ alignItems: 'center' }}>
                        <Text style={styles.ptext}>TechMed</Text>
                        <Text style={styles.stext}>Agenda</Text>
                  </View>

                  <View style={{ width: '88%' }}>
                        <Text style={{ marginLeft: 10, fontWeight: '600',color:'rgba(255, 255, 255, 1)' }}>E-mail</Text>
                        <Input
                              placeholder='exemplo@123.com'
                        />
                        <Text style={{ marginLeft: 10, fontWeight: '600',color:'rgba(255, 255, 255, 1)' }}>Senha</Text>
                        <Input placeholder="Digite pelo menos 6 caracteres" secureTextEntry={true} />

                        <Text style={{ fontWeight: '500', color:'rgba(0, 199, 199, 1)', textAlign: 'right' }}>Esqueci minha senha</Text>
                  </View>

                  <Button
                        title="Entrar"
                        buttonStyle={{
                              backgroundColor: 'rgba(0, 99, 199, 1)',
                              paddingVertical: 18,
                              borderRadius: 10,
                        }}
                        containerStyle={{
                              width: 340,
                              marginHorizontal: 50,
                              marginVertical: 20,
                        }}
                  />
                  <TouchableOpacity>
                        <Button title="Quero me cadastrar"
                              buttonStyle={{
                                    backgroundColor: 'transparent',
                              }}
                              titleStyle={{
                                    color: 'rgba(255, 255, 255, 1)'
                              }}
                        />
                  </TouchableOpacity>

                  <TouchableOpacity>
                        <View style={{backgroundColor:'rgba(0, 99, 199, 1)', width: 340, height: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20, marginTop: 30 ,paddingTop:15,paddingBottom:15,borderRadius:10}}>
                              <Image source={require('../assets/img/google.png')}
                                    style={{
                                          width: 35,
                                          height: 35,
                                    }} />
                              <Text style={{ fontWeight: '900', fontSize: 16, color: 'rgba(255, 255, 255, 1)' }}>Entre com o Google</Text>
                        </View>
                  </TouchableOpacity>
            </View>
      )
}



const styles = StyleSheet.create({
      container: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 61, 122, 1)'
      },
      ptext: {
            color: 'rgba(59, 190, 88, 1)',
            fontWeight: '600',
            fontSize: 52,
            fontStyle: 'italic',
      },
      stext: {
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '900',
            fontSize: 40,
            marginTop: -15,
      }
});