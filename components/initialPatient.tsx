import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InitialPatient() {

  const navigation = useNavigation();
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
      // Função para carregar a sessão do usuário ao inicializar o componente
      const loadUserSession = async () => {
          try {
              const sessionData = await AsyncStorage.getItem('userSession');
              if (sessionData !== null) {
                  setUserSession(JSON.parse(sessionData));
              }
          } catch (e) {
              console.error('Erro ao carregar a sessão do usuário:', e);
          }
      };

      loadUserSession();
  }, []);

  const handleDoctor1=()=>{
    navigation.dispatch(StackActions.replace('CalendarAg'));
  }

  return (
    <View style={{
      display: 'flex', height: '100%', width: '100%', alignItems: 'center', backgroundColor: '#FBFBFB'
    }}>
      <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', height: 100 }}>
        <Image source={require('../assets/img/UI.png')} />
        <Text style={styles.title}>Bem vindo, {userSession.name}</Text>
        <Image source={require('../assets/img/user-icon.png')} style={{ height: 50, width: 50 }} />
      </View>

      <View style={styles.containerPro}>
        <Text style={{ fontSize: 21, fontWeight: '700' }}>Em busca de um profissional?</Text>
        <Text style={{ fontWeight: '500', marginTop: 30 }}>Recomendações</Text>

        <View>
          <TouchableOpacity onPress={handleDoctor1}>
            <View style={{
              height: 100, width: 310, backgroundColor: '#FFFFFF', display: 'flex',
              justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 40, borderRadius: 10, paddingVertical: 20
            }}>
              <View>
                <Image source={require('../assets/img/Doutora1.png')} />
              </View>
              <View style={{ display: 'flex', marginLeft: 15 }}>
                <Text style={{ fontWeight: '700', color: "#0063C7", fontSize: 20 }}>Carolina Vasconcelos</Text>
                <Text style={{ fontWeight: '300', color: "#0063C7", fontSize: 20 }}>Nutricionista</Text>
                <Image source={require('../assets/img/star.png')}/>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{
              height: 100, width: 310, backgroundColor: '#FFFFFF', display: 'flex',
              justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 40, borderRadius: 10, paddingVertical: 20,
              paddingRight:80,paddingLeft:15
            }}>
              <View>
                <Image source={require('../assets/img/profissional2.png')} />
              </View>
              <View style={{ display: 'flex', marginLeft: 15 }}>
                <Text style={{ fontWeight: '700', color: "#0063C7", fontSize: 20 }}>Julia Marques</Text>
                <Text style={{ fontWeight: '300', color: "#0063C7", fontSize: 20 }}>Fisioterapeuta</Text>
                <Image source={require('../assets/img/star.png')}/> 
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{
              height: 100, width: 310, backgroundColor: '#FFFFFF', display: 'flex',
              justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 40, borderRadius: 10, paddingVertical: 20,
              paddingRight:80,paddingLeft:15
            }}>
              <View>
                <Image source={require('../assets/img/profissional3.png')} />
              </View>
              <View style={{ display: 'flex', marginLeft: 15 }}>
                <Text style={{ fontWeight: '700', color: "#0063C7", fontSize: 20 }}>Affonso Solano</Text>
                <Text style={{ fontWeight: '300', color: "#0063C7", fontSize: 20 }}>Psiquiatra</Text>
                <Image source={require('../assets/img/star.png')}/> 
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
  title: {
    fontSize: 28,
    color: "#0063C7",
    fontWeight: '700',
  },
  containerPro: {
    marginTop: 70,
  }
});