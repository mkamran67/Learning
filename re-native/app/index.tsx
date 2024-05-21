import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function index() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Link href='/profile'>
        <Text className='text-blue-600'>Go to Profile</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});