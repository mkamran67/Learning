import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { type Models } from "react-native-appwrite";

const useAppwrite = (fn: () => any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Models.Document[] | []>([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();

      setData(response);

      // console.log(JSON.stringify(response, null, 2));
    } catch (err: any) {
      Alert.alert('Error', err.message);
      console.log(err);
    } finally {
      setIsLoading(false);
    }

  };
  useEffect(() => {

    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};



export default useAppwrite;