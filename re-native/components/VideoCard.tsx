import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants';
import { ResizeMode, Video } from 'expo-av';

const VideoCard = ({ video: { title, thumbnail, video, creator: { username, avatar } } }) => {

  const bunnyLink = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <View className='flex-col items-center px-4 mb-14'>
      <View className='flex-row items-start gap-3'>
        <View className='flex-row items-center justify-center flex-1'>
          <View className='w-[46px] h-[46px] p-0.5 rounded-lg border items-center justify-center border-secondary'>
            <Image source={{ uri: avatar }} className='w-full h-full rounded-lg' resizeMode='cover' />
          </View>
          <View className='justify-center flex-1 ml-3 gap-y-1'>
            <Text numberOfLines={1} className='text-sm text-white font-psemibold'>{title}</Text>
            <Text className='text-xs text-gray-100 font-pregular' numberOfLines={1}>{username}</Text>

          </View>
        </View>
        <View className='pt-2'>
          <Image source={icons.menu} className='w-5 h-5' resizeMode='contain' />
        </View>
      </View>
      {
        isPlaying ?
          (<Video
            // ref={video}
            source={{ uri: bunnyLink }}
            className='w-full h-72 bg-white/10'
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
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
          />) :
          (<TouchableOpacity activeOpacity={0.7} onPress={() => setIsPlaying(true)} className='relative items-center justify-center w-full mt-3 h-60 rounded-xl'>
            <Image source={{ uri: thumbnail }} className='w-full h-full mt-3 rounded-xl' resizeMode='cover' />
            <Image source={icons.play} className='absolute w-12 h-12' resizeMode='contain' />
          </TouchableOpacity>)
      }
    </View>
  );
};

export default VideoCard;