import { FlatList, StyleSheet, Text } from "react-native";
export default function CoursesScreen() {
  const courses = [
    {
      name: "React Native",
      id: 1,
    },
    {
      name: "React JS",
      id: 2,
    },
    {
      name: "JavaScript",
      id: 3,
    },
  ];
  return (
    <FlatList
      data={courses}
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text style={styles.content}>{item.name}</Text>}
    />
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 20,
    fontSize: 20,
    backgroundColor: "blue",
    marginVertical: 10,
    color: "white",
  },
});
