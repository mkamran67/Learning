import { icons, images } from '@/constants';
import { useState } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native';

type SearchInputProps = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric';
};


const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, keyboardType }: SearchInputProps) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className='flex-row items-center w-full h-16 px-4 space-x-4 border-2 bg-black-100 rounded-2xl focus:border-secondary border-black-200'>
      <TextInput
        className='flex-1 mt-0.5 text-base text-white font-pregular'
        value={value}
        placeholder='Search for a video topic...'
        placeholderTextColor='#7b7b8b'
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />

      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;