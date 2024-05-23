import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';

import { createUser } from '../../lib/appwrite';
import { parseSync } from '@babel/core';

export default function SignUp() {
  const [form, setForm] = useState({
    email: '',
    confirmationEmail: '',
    username: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    if (form.password.length < 8) {
      Alert.alert('Error', 'Password must be longer than 8 characters.');
      return;
    }

    if (form.email !== form.confirmationEmail) {
      Alert.alert('Error', "Emails don't match.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await createUser(form.email, form.password, form.username);


      router.replace('/home');
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='justify-center w-full min-h-[85vh] px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <Text className='mt-10 text-2xl text-white text-semibold font-psemibold'>
            Sign Up to Potato.
          </Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title='Confirm Email'
            value={form.confirmationEmail}
            handleChangeText={(e: string) => setForm({ ...form, confirmationEmail: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e: string) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title='Sign Up'
            handler={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className='flex-row justify-center gap-2 pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Have an account?
            </Text>
            <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
