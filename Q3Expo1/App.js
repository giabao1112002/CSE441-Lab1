import React, { useState } from "react";
import { Text, Button, View } from "react-native";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text>Current Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
};
