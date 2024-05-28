import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {

  const { query } = useLocalSearchParams();

  return (
    <SafeAreaView className='w-full h-full bg-primary'>
      <Text className='text-3xl text-white'>Search : {query}</Text>
    </SafeAreaView>
  );
};

export default Search;