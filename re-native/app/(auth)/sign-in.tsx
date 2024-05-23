import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn } from '@/lib/appwrite';

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    if (form.password.length < 8) {
      Alert.alert('Error', 'Password must be longer than 8 characters.');
      return;
    }

    try {
      setIsSubmitting(true);
      await signIn(form.email, form.password);


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
            Log in to Potato
          </Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title='Sign In'
            handler={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className='flex-row justify-center gap-2 pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account?
            </Text>
            <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;