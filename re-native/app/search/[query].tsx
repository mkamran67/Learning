import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '@/components/SearchInput';
import EmptyState from '@/components/EmptyState';
import { searchPosts } from '@/lib/appwrite';
import useAppwrite from '@/lib/useAppwrite';
import VideoCard from '@/components/VideoCard';
import { useLocalSearchParams } from 'expo-router';

const Search = () => {
  const { query } = useLocalSearchParams();
  const refinedQuery = Array.isArray(query) ? query[0] : query + '';
  const { data: posts, isLoading, refetch } = useAppwrite((() => searchPosts(refinedQuery)));

  useEffect(() => {
    refetch();
  }, [query]);


  return (
    <SafeAreaView className='h-full bg-primary'>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className='px-4 my-6'>
            <Text className='text-sm text-gray-100 font-pmedium'>
              Search Results
            </Text>
            <Text className='text-2xl text-white font-psemibold'>
              {query}
            </Text>
            <View className='mt-6 mb-8'>
              <SearchInput initialQuery={refinedQuery} />
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

export default Search;