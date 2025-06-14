import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './components/HomeScreen';
import ExploreScreen from './components/ExploreScreen';
import CommunityHomeScreen from './components/CommunityHomeScreen';
import CommunityScreen from './components/CommunityScreen';
import GroupActivityScreen from './components/GroupActivityScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import DecorateScreen from './components/DecorateScreen';
import MyListScreen from './components/MyListScreen';
import AlarmListScreen from './components/AlarmListScreen';
import AlarmEditScreen from './components/AlarmEditScreen';
import FriendListScreen from './components/FriendListScreen';

const Tab = createBottomTabNavigator();
const CommunityStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

// ✅ Community stack navigator
function CommunityStackScreen() {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen
        name="CommunityHome"
        component={CommunityHomeScreen}
        options={{ headerShown: false }}
      />
      <CommunityStack.Screen
        name="CommunityDetail"
        component={CommunityScreen}
        options={({ route }) => ({
          title: route.params?.groupName || '모임 상세',
        })}
      />
      <CommunityStack.Screen
        name="GroupActivityScreen"
        component={GroupActivityScreen}
        options={({ route }) => ({
          title: route.params?.groupName || '모임 활동',
        })}
      />
    </CommunityStack.Navigator>
  );
}

// ✅ Settings stack navigator
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsHome" component={SettingsScreen} options={{ title: '설정' }} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} options={{ title: '계정' }} />
      <SettingsStack.Screen name="Decorate" component={DecorateScreen} options={{ title: '개인정보 관리' }} />
      <SettingsStack.Screen name="MyList" component={MyListScreen} />
      <SettingsStack.Screen name="AlarmList" component={AlarmListScreen} />
      <SettingsStack.Screen name="AlarmEdit" component={AlarmEditScreen} />
      <SettingsStack.Screen name="FriendList" component={FriendListScreen} options={{ title: '친구 목록' }} />
    </SettingsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === '홈') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === '탐색') iconName = focused ? 'search' : 'search-outline';
            else if (route.name === '커뮤니티') iconName = focused ? 'people' : 'people-outline';
            else if (route.name === '설정') iconName = focused ? 'settings' : 'settings-outline';

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2a8bff',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="탐색" component={ExploreScreen} />
        <Tab.Screen name="커뮤니티" component={CommunityStackScreen} />
        <Tab.Screen name="설정" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
