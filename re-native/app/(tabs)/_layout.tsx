import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image source={require('../assets/icon.png')} />
    </View>
  );
};


const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (

            )
          }} />
      </Tabs>
    </>
  );
};

export default TabsLayout;