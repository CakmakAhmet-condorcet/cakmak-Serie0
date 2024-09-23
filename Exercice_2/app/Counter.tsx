import { View, Text ,Button } from "react-native";
import { useState } from "react";


const Counter = ({}) => {
    const [count, setCount] = useState<number>(0)

    return (
        <View>
            <Text>Counter : {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)}/>
        </View>
    )
}

export default Counter;

// Il permet de déclarer des variables d'état qui sont persistantes entre les re-rendus du composant.

// Lorsque vous cliquez sur le bouton d'incrémentation, l'état count est mis à jour avec la nouvelle valeur (ex. de 0 à 1, puis 1 à 2, etc.).