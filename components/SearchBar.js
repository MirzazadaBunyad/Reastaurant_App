import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
export default function SearchBar({ inputValue, sendNameChange, sendNameSubmit }) {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name="search1" size={30} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        value={inputValue}
        onChange={sendNameChange}
        onEndEditing={sendNameSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderRadius: 20,
  },
});
