import { View, Text, Button } from "react-native";
import { useState } from "react";

interface LoginProps {
    name: String,
    isLoggedIn: boolean
}

const LoginStatus = ({ name, isLoggedIn }: LoginProps) => {
    const [log, setLog] = useState<boolean>(isLoggedIn)

    return (

        <View>
            <Button title={log ? "Log Out" : "Log In"} onPress={() => setLog(!log)}></Button>
            {log ? <Text>Heureux de te revoir, {name}!</Text>: <Text>Vous n'êtes pas connecté</Text>}
        </View>



    )
}

export default LoginStatus;