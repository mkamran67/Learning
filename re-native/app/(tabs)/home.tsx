import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';

const Home = () => {
  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>
            {item.id}
          </Text>
        )}
        ListHeaderComponent={() => (
          <View className='px-4 my-6 space-y-6'>
            <View className='flex-row items-start justify-between mb-6'>
              <Text className='text-sm text-gray-100 font-pmedium'>
                Welcome Back!
              </Text>
              <Text className='text-2xl text-white font-psemibold'>
                mkamran94
              </Text>
            </View>
            <View className='mt-1.5'>
              <Image
                source={images.logoSmall}
                className='h-10 w-9'
                resizeMode='contain' />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;