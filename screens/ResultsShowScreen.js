import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);

  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  return (
    <View>
      <Text style={styles.title}>{result?.name}</Text>
      <Text style={styles.phone}>{result?.phone}</Text>
      <View style={styles.icons}>
        {result?.is_closed ? (
          <AntDesign name="closecircleo" size={28} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={28} color="black" />
        )}
      </View>
      <FlatList
        data={result?.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
  phone: {
    alignSelf: "center",
    fontSize: 16,
  },
  image: {
    height: 200,
    width: 300,
    margin: 8,
    borderRadius: 10,
  },
  icons: {
    alignSelf: "center",
  },
});
