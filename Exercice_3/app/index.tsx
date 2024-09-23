import { Text, View } from "react-native";
import LoginStatus from "./LoginStatus";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginStatus name="Manie" isLoggedIn={false}></LoginStatus>
    </View>
  );
}
