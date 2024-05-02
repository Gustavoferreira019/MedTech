import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import InitialScreen from './components/initialScreen';
import Presentation from './components/presentation';
import PacientScreen from './components/pacientScreen'
import ProScreen from './components/proScreen';
import { useEffect, useState } from 'react';


export default function App() {

  const [showPresentation, setShowPresentation] = useState(false);
  const [showPacient, setShowPaciente] = useState(false);
  const [showProScreen, setShowProScreen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPresentation(true);
    }, 3000);
  
    return () => clearTimeout(timeout);
  }, []);

  const showPacientScreen = () => {
    setShowPaciente(true);
    setShowPresentation(false);
  };

  const showProSc = () => {
    setShowPresentation(false);
    setShowProScreen(true);
  };

  const handlePrevious = () => {
    setShowPaciente(false);
    setShowProScreen(false)
    setShowPresentation(true);
  };


  return (
    <View style={styles.container}>


      {showPresentation ? (
        <Presentation clickPaciente={showPacientScreen} clickPro={showProSc} />
      ) : null}

      {showPacient ? (
        <PacientScreen clickPreviousPacient={handlePrevious} />
      ) : null}

      {showProScreen ? (
        <ProScreen clickPreviousPro={handlePrevious}/>
      ) : null}

      {!showPresentation && !showPacient && !showProScreen ? (
        <InitialScreen />
      ) : null}



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 61, 122, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
