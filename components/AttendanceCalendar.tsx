import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Image, Text, View } from 'react-native';

interface AttendanceCalendarProps {
  characterType: 'penguin' | 'meerkat' | 'turtle';
}

const characterStamps = {
  penguin: require('../assets/stamp_penguin.png'),
  meerkat: require('../assets/stamp_meerkat.png'),
  turtle: require('../assets/stamp_turtle.png'),
};

export default function AttendanceCalendar({ characterType }: AttendanceCalendarProps) {
  const [markedDates, setMarkedDates] = useState<{ [date: string]: any }>({});

  const handleDayPress = (day: { dateString: string }) => {
    const newMarked = {
      ...markedDates,
      [day.dateString]: { selected: true }, // 꼭 있어야 calendar가 표시해줌
    };

    setMarkedDates(newMarked);
  };

  return (
    <Calendar
      markingType="custom"
      markedDates={markedDates}
      onDayPress={handleDayPress}
      style={{ borderRadius: 10, width: 380 }}
      dayComponent={({ date }) => {
        const stamp = markedDates[date.dateString] ? characterStamps[characterType] : null;
        return (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {stamp ? (
              <Image source={stamp} style={{ width: 24, height: 24 }} resizeMode="contain" />
            ) : (
              <Text>{date.day}</Text>
            )}
          </View>
        );
      }}
    />
  );
}
