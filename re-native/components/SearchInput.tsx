import { icons, images } from '@/constants';
import { router, usePathname } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity, Image, Alert } from 'react-native';


const SearchInput = () => {
  const pathName = usePathname();
  const [query, setQuery] = useState('');

  return (
    <View className='flex-row items-center w-full h-16 px-4 space-x-4 border-2 bg-black-100 rounded-2xl focus:border-secondary border-black-200'>
      <TextInput
        className='flex-1 mt-0.5 text-base text-white font-pregular'
        value={query}
        placeholder='Search for a video topic...'
        placeholderTextColor='#CDCDE0'
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert('Empty Query', "Add some letters to search for.");
          }

          if (pathName.startsWith('/search')) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }

        }}
      >

        <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;