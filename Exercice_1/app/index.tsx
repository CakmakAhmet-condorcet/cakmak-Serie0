import { Text, View } from "react-native";
import WelcomeMessage from "./WelcomeMessage";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <WelcomeMessage name="Manie"></WelcomeMessage>
    </View>
  );
}
// nous pouvons changer la valeur de name dans la balise WelcomeMessage