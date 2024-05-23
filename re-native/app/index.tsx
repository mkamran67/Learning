import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';



export default function index() {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='items-center justify-center w-full min-h-[85vh] px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5 '>
            <Text className='text-3xl font-bold text-center text-white'>
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200'>Potato</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode='contain'
              className='w-[148px] h-[15px] absolute -bottom-2 right-24'
            />
          </View>
          <Text className='text-sm text-center text-gray-100 font-pregular mt-7'>Where creativity meets innovation: embark on a journey of limitless explroation with Potato</Text>
          <CustomButton
            title='Continue with Email'
            handler={() => router.push('/sign-in')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
