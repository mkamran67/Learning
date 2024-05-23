import { icons, images } from '@/constants';
import { useState } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native';

type FormFieldProps = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric';
};


const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyboardType }: FormFieldProps) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='flex-row items-center w-full h-16 px-4 border-2 bg-black-100 rounded-2xl focus:border-secondary border-black-200'>
        <TextInput
          className='flex-1 text-base text-white font-psemibold'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              className='w-6 h-6' resizeMode='contain'
              source={!showPassword ? icons.eye : icons.eyeHide} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;