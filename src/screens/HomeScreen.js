import { Button, StyleSheet, Text, View } from "react-native";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.content}>
      <Text>Home Screen</Text>
      <Button title="Courses" onPress={() => navigation.navigate("Courses")} />
      <Button title="CoursesInformation" onPress={() => navigation.navigate("CoursesInformation")} />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
