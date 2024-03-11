import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '~/app/styles';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.yellow,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: '7%',
          paddingTop: 10,
        },
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(family)"
        options={{
          headerShown: false,
          tabBarLabel: 'Family',
          tabBarIcon: ({color}) => <MaterialIcons name="family-restroom" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="(followup)"
        options={{
          headerShown: false,
          tabBarLabel: 'Follow Up',
          tabBarIcon: ({color}) => <MaterialIcons name="follow-the-signs" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <FontAwesome name="user-md" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}