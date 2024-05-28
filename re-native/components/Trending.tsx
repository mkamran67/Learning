import { FlatList, TouchableOpacity, ImageBackground, Image, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { icons } from '@/constants';
import { Video, ResizeMode } from 'expo-av';
// import { WebView } from 'react-native-webview';

const zoomIn = {
  0: {
    scale: 0.9
  },
  1: {
    scale: 1.1,
  }
};

const zoomOut = {
  0: {
    scale: 1.1,
  },
  1: {
    scale: 0.9
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const bunnyLink = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

  const [isPlaying, setIsPlaying] = useState(false);
  // // const video = React.useRef<any>(null);


  // useEffect(() => {
  //   if (isPlaying && video.current) {
  //     video.current.playAsync();
  //   }

  // }, [isPlaying]);




  // <View className="mt-3 overflow-hidden rounded-lg w-52 h-72 bg-black/10">
  //           <WebView
  //             className='w-full h-full bg-black/10'
  //             javaScriptEnabled={true}
  //             source={{ uri: item.video }}
  //           />
  //         </View>

  return (
    <Animatable.View
      className='mr-5'
      duration={500}
      // @ts-ignore
      animation={activeItem === item.$id ? zoomIn : zoomOut}
    >
      {
        isPlaying ? (

          <Video
            // ref={video}
            source={{ uri: bunnyLink }}
            className='w-52 h-72 rounded-[35px] mt-3 bg-white/10'
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
          />
        ) : (
          <TouchableOpacity
            className='relative items-center justify-center'
            activeOpacity={0.7}
            onPress={() => setIsPlaying(true)}
          >
            <ImageBackground
              source={{ uri: item.thumbnail }}
              className='w-52 h-72 rounded-[35px] overflow-hidden shadow-lg shadow-black/40 my-5'
              resizeMode='cover'
            />
            <Image
              source={icons.play}
              className='absolute w-12 h-12'
              resizeMode='contain'
            />
          </TouchableOpacity>)}
    </Animatable.View>
  );
};


const Trending = ({ posts }) => {

  const [activeItem, setActiveItem] = useState(posts[1]);
  const viewableItemsChanges = ({ viewableItems }) => {

    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }

  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
      onViewableItemsChanged={viewableItemsChanges}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 100
      }}
      contentOffset={{
        x: 130,
        y: 0
      }}
    />
  );
};

export default Trending;