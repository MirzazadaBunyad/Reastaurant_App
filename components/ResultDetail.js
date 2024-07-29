import { Image, StyleSheet, Text, View } from "react-native";
export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={result?.image_url ? { uri: result?.image_url } : null}
      />
      <View style={styles.information}>
        <Text style={styles.name}>{result?.name}</Text>
        <Text style={styles.description}>
          {result?.rating} Star Restaurant, {result?.review_count} Evaluation
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    backgroundColor: "#A9CEF4",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  information: {
    marginLeft: 5,
  },
  name: {
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#2A2D43",
    marginBottom: 5,
  },
});
