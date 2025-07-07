import { Text, View } from "react-native";
import {Link} from "expo-router"

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-blue-500 font-bold">This is a movie app</Text>
      <Link href="/onboard">Onboard</Link>
      <Link href={{
        pathname:'/movie/[id]',
        params:{id : 'Avengers'},
      }}
      >Avengers</Link>
      <Link href={{
        pathname:'/movie/[id]',
        params:{id : 'Ironman'},
      }}
      >Ironman</Link>
      <Link href={{
        pathname:'/movie/[id]',
        params:{id : 'Superman'},
      }}
      >Superman</Link>
      <Link href={{
        pathname:'/movie/[id]',
        params:{id : 'GOT'},
      }}
      >GOT</Link>
      <Link href={{
        pathname:'/movie/[id]',
        params:{id : 'Spiderman'},
      }}
      >Spiderman</Link>
    </View>
  );
}
