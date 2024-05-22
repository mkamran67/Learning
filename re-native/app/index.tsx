import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function index() {
  return (
    <View className='items-center justify-center flex-1'>
      <Link href='/home' style={{ color: 'blue' }}>
        Go to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});