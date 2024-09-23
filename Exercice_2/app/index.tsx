import { Text, View } from "react-native";
import Counter from "./Counter";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter></Counter>
    </View>
  );
}
