import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { icons } from '@/constants';


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

  const [playing, setPlaying] = useState(false);


  return (
    <Animatable.View
      className='mr-5'
      duration={500}
      // @ts-ignore
      animation={activeItem === item.$id ? zoomIn : zoomOut}
    >
      {
        playing ? (
          <Text className='text-white'>
            Playing
          </Text>
        ) : (
          <TouchableOpacity
            className='relative items-center justify-center'
            activeOpacity={0.7}
            onPress={() => setPlaying(true)}
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