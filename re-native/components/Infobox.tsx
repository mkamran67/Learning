import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  title: string | number,
  containerStyles?: string,
  subTitle?: string,
  titleStyles?: string,
};

const Infobox = ({ title, containerStyles, subTitle, titleStyles }: Props) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${titleStyles}`}>{title}</Text>
      <Text className={`text-sm text-gray-100 text-center font-pregular`}>{subTitle}</Text>
    </View>
  );
};

export default Infobox;