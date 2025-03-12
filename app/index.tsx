import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Zairita</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#F14123',
  },
});