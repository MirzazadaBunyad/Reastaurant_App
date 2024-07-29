import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { useState } from "react";
export default function SearchScreen() {
  const [searchApi, results, errMessages] = useResults();
  const [value, setValue] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        inputValue={value}
        sendNameChange={setValue}
        sendNameSubmit={() => searchApi(value)}
      />
      {errMessages ? (
        <Text style={styles.errText}>{errMessages}</Text>
      ) : (
        <>
          {results.length == 0 ? (
            <></>
          ) : (
            <>
              <ResultsList
                title="Cheap Restaurants"
                results={filterResultsByPrice("£")}
              />
              <ResultsList
                title="Medium Restaurants"
                results={filterResultsByPrice("££")}
              />
              <ResultsList
                title="Expensive Restaurants"
                results={filterResultsByPrice("£££")}
              />
            </>
          )}
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  errText: {
    color: "red",
    alignSelf: "center",
    fontSize: 18,
  },
});
