import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Button } from '@rneui/themed';

export default function CalendarAg() {

    const navigation = useNavigation();

    const handleArrowBack = () => {
        navigation.dispatch(StackActions.replace('InitialPatient'));
    }

    const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [markedDates, setMarkedDates] = useState({
        '2024-05-27': { marked: true, dotColor: 'green' },
        '2024-05-28': { marked: true, dotColor: 'green' }, 
        '2024-05-30': { marked: true, dotColor: 'green' }, 
    });

    const handleDayPress = (day: any) => {
        setSelectedDate(day.dateString);
    };
    const handleTimePress = (time: string) => {
        setSelectedTimes(prevTimes => {
            const isSelected = prevTimes.includes(time);
            const updatedTimes = isSelected
                ? prevTimes.filter(selectedTime => selectedTime !== time)
                : [...prevTimes, time];
            return updatedTimes;
        });
    };

    LocaleConfig.locales['br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
        monthNamesShort: ['Jan.', 'Fev', 'Março', 'Abril', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    };
    LocaleConfig.defaultLocale = 'br';

    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%', display: 'flex' }}>
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 120, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    height: 35, width: 35, display: 'flex', alignItems: 'center',
                    position: 'absolute', top: 50, left: 30
                }}>
                    <TouchableOpacity onPress={handleArrowBack}>
                        <FontAwesomeIcon icon={faArrowLeft} size={30} color="#000" />
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 21, fontWeight: '700' }}>Agendamento</Text>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 25 }}>
                <Text style={{ fontSize: 30, fontWeight: '700', color: '#0063C7' }}>Escolha a melhor data para sua consulta</Text>
            </View>
            <Calendar
                initialDate='2024-05-23'
                onDayPress={handleDayPress}
                markedDates={{
                    ...markedDates,
                    [String(selectedDate)]: {
                        selected: true,
                        selectedColor: 'blue',
                    }
                }}

            />

            <View style={{ marginTop: 20, width: '100%' }}>
                <Text style={{ fontWeight: '700', fontSize: 21, marginHorizontal: 15, }}>Horários Disponíveis</Text>

                <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginLeft: -35 }}>
                    <View>
                        <Button
                            title="8:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("8:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("8:00") ? 'blue' : 'transparent',
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("8:00") ? 'white' : 'rgba(78, 116, 289, 1)' }} 
                            containerStyle={{
                                marginHorizontal: 50,
                                marginVertical: 10,
                                width: 100,
                            }}
                            onPress={() => handleTimePress("8:00")}
                        />

                        <Button
                            title="12:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("12:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("12:00") ? 'blue' : 'transparent', 
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("12:00") ? 'white' : 'rgba(78, 116, 289, 1)' }} 
                            containerStyle={{
                                marginHorizontal: 50,
                                marginVertical: 10,
                                width: 100,
                            }}
                            onPress={() => handleTimePress("12:00")}
                        />

                        <Button
                            title="17:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("17:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("17:00") ? 'blue' : 'transparent', 
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("17:00") ? 'white' : 'rgba(78, 116, 289, 1)' }} 
                            containerStyle={{
                                marginHorizontal: 50,
                                marginVertical: 10,
                                width: 100,
                            }}
                            onPress={() => handleTimePress("17:00")}
                        />
                    </View>
                    <View>
                        <Button
                            title="9:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("9:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("9:00") ? 'blue' : 'transparent', 
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("9:00") ? 'white' : 'rgba(78, 116, 289, 1)' }} 
                            containerStyle={{
                                marginHorizontal: -20,
                                marginVertical: 10,
                                width: 100,
                            }}
                            onPress={() => handleTimePress("9:00")}

                        />
                        <Button
                            title="14:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("14:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("14:00") ? 'blue' : 'transparent',  
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("14:00") ? 'white' : 'rgba(78, 116, 289, 1)' }}
                            containerStyle={{
                                width: 100,
                                marginVertical: 10,
                                marginHorizontal: -20,
                            }}
                            onPress={() => handleTimePress("14:00")}
                        />
                        <Button
                            title="18:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("18:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("18:00") ? 'blue' : 'transparent', 
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("18:00") ? 'white' : 'rgba(78, 116, 289, 1)' }}
                            containerStyle={{
                                width: 100,
                                marginVertical: 10,
                                marginHorizontal: -20,
                            }}
                            onPress={() => handleTimePress("18:00")}
                        />

                    </View>
                    <View>
                        <Button
                            title="11:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("11:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("11:00") ? 'blue' : 'transparent', 
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("11:00") ? 'white' : 'rgba(78, 116, 289, 1)' }}
                            containerStyle={{
                                width: 100,
                                marginVertical: 10,
                                marginHorizontal: 60,
                            }}
                            onPress={() => handleTimePress("11:00")}
                        />
                        <Button
                            title="15:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("15:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("15:00") ? 'blue' : 'transparent', 
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("15:00") ? 'white' : 'rgba(78, 116, 289, 1)' }}
                            containerStyle={{
                                width: 100,
                                marginVertical: 10,
                                marginHorizontal: 60,
                            }}
                            onPress={() => handleTimePress("15:00")}
                        />
                        <Button
                            title="19:00"
                            buttonStyle={{
                                borderColor: selectedTimes.includes("19:00") ? 'blue' : 'rgba(78, 116, 289, 1)',
                                backgroundColor: selectedTimes.includes("19:00") ? 'blue' : 'transparent', 
                            }}
                            type="outline"
                            titleStyle={{ color: selectedTimes.includes("19:00") ? 'white' : 'rgba(78, 116, 289, 1)' }}
                            containerStyle={{
                                width: 100,
                                marginVertical: 10,
                                marginHorizontal: 60,
                            }}
                            onPress={() => handleTimePress("19:00")}
                        />
                    </View>
                </View>
                <Button
                    title="Marcar consulta"
                    buttonStyle={{
                        backgroundColor: 'rgba(78, 116, 289, 1)',
                        borderRadius: 3,
                    }}
                    containerStyle={{
                        width: 350,
                        marginHorizontal: 30,
                        marginVertical: 15,
                    }}
                />
            </View>
        </View>
    );
}
