import { View, Text } from "react-native";

interface MessageProps {
    name: String
}

// props servent à déclarer les variables et donc de typer les attribues

const WelcomeMessage = ({name}: MessageProps) => {
    return (
        <View>
            <Text>Hello, {name}!</Text>
        </View>
    )
}

export default WelcomeMessage;

