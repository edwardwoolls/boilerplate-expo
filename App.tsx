import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-gray-800">Welcome to Expo + NativeWind!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
