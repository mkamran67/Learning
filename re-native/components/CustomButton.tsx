import { Text, TouchableOpacity } from 'react-native';

type CustomButtonProps = {
  title: string;
  handler: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};



const CustomButton = (
  {
    title,
    handler,
    containerStyles,
    textStyles,
    isLoading
  }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handler}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    >
      <Text className={`text-lg text-primary font-psemibold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;