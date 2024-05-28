import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '@/components/SearchInput';
import EmptyState from '@/components/EmptyState';
import { getUserPosts, searchPosts, signOut } from '@/lib/appwrite';
import useAppwrite from '@/lib/useAppwrite';
import VideoCard from '@/components/VideoCard';
import { router, useLocalSearchParams } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';
import { TouchableOpacity } from 'react-native';
import { icons } from '@/constants';
import Infobox from '@/components/Infobox';

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, isLoading } = useAppwrite((() => getUserPosts(user?.$id || '')));

  const logout = async () => {

    const res = await signOut();
    setUser && setUser(null);
    setIsLoggedIn && setIsLoggedIn(false); // Add null check before invoking setIsLoggedIn
    router.replace('/sign-in');
  };


  return (
    <SafeAreaView className='h-full bg-primary'>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className='items-center justify-center w-full px-4 mt-6 mb-12'>
            <TouchableOpacity className='items-end w-full mb-10' onPress={logout}>
              <Image source={icons.logout} className='w-6 h-6' resizeMode='contain' />
            </TouchableOpacity>
            <View className='items-center justify-center w-16 h-16 border rounded-lg border-secondary'>
              <Image source={{ uri: user?.avatar }} className='w-[90%] h-[90%] rounded-lg' resizeMode='cover' />
            </View>
            <Infobox
              title={user?.username}
              containerStyles='mt-5'
              titleStyles='text-lg'
            />
            <View className='flex-row mt-5'>
              <Infobox
                title={posts.length || 0}
                subTitle='Posts'
                containerStyles='mr-10'
                titleStyles='text-xl'
              />
              <Infobox
                title={'1.2k'}
                subTitle='Followers'
                titleStyles='text-xl'
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Search Results Found" subTitle="No Videos found for this search query." />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;