import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-400">
      <Text>Home page</Text>
      <Link href='/profile' style={{ color: 'yellowgreen' }}>Profile</Link>
      <StatusBar style="auto" />
    </View>
  );
}
