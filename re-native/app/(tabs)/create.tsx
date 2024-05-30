import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { icons } from '@/constants';
import { ResizeMode, Video } from 'expo-av';
import React, { useState } from 'react';
import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Create = () => {

  const bunnyLink = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [form, setForm] = React.useState({
    title: '',
    thumbnail: '',
    video: '',
    prompt: '',
  });

  const onSubmit = () => {
    console.log(form);
  };

  const openPicker = async (type: 'video' | 'thumbnail') => {
    // const result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    // if (!result.cancelled) {
    //   setForm({ ...form, [type]: result });
    // }
  };


  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView className='px-4 my-6'>
        <Text className='text-2xl font-semibold text-white'>
          Upload Video
        </Text>
        <FormField
          title='Video Title'
          placeholder='Give your vide a catchy title...'
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles='mt-10'
          value={form.title} />
        <View className='space-y-2 mt-7'>
          <Text className='text-base text-gray-100 font-psemibold'>
            Upload Video
          </Text>
          <TouchableOpacity onPress={() => openPicker('video')}>
            {form.video ? (
              <Video
                // ref={video}
                source={{ uri: bunnyLink }}
                className='w-full h-64 rounded-2xl'
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
                onPlaybackStatusUpdate={status => {
                  // @ts-ignore
                  if (status.didJustFinish) {
                    setIsPlaying(false);
                  }
                }}
                onError={(error) => {
                  // console.log(`\n ${item.video} \n`);
                  console.log(error);
                }}
              />
            ) : (
              <View className='items-center justify-center w-full h-40 px-4 bg-black-100 rounded-2xl'>
                <View className='items-center justify-center border border-dashed w-14 h-14 border-secondary-100'>
                  <Image source={icons.upload} resizeMode='contain' className='w-1/2 h-1/2' />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View className='space-y-2 mt-7'>
          <Text className='text-base text-gray-100 font-psemibold'>
            Thumbnail Image
          </Text>
          <TouchableOpacity onPress={() => openPicker('thumbnail')}>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode='cover'
                className='w-full h-64 rounded-2xl'
              />
            ) : (
              <View className='flex-row items-center justify-center w-full h-16 px-4 space-x-2 border-2 bg-black-100 rounded-2xl border-black-200'>
                {/* <View className='items-center justify-center border border-dashed w-14 h-14 border-secondary-100'> */}
                <Image source={icons.upload} resizeMode='contain' className='w-5 h-5' />
                <Text className='text-sm text-gray-100 font-pmedium'>Choose a file.</Text>
                {/* </View> */}
              </View>
            )}
          </TouchableOpacity>
        </View>
        <FormField
          title='AI Prompt'
          value={form.prompt}
          placeholder='The prompt you used to create the video...'
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles='mt-7'
        />
        <CustomButton
          title='Submit & Publish'
          handler={onSubmit}
          containerStyles='mt-7'
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;