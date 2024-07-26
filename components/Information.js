import { Image, StyleSheet, Text, View } from "react-native";
export default function Information({ title, imageSource, desc }) {
  return (
    <View>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
  content: {
    alignItems: "center",
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
  },
});
