import { ScrollView, StyleSheet, Text, View } from "react-native";
import Information from "../../components/Information";
export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title="React Native Education"
        imageSource={require("../../assets/reactNative.jpg")}
        desc="Detailed React Native Tutorial"
      />
      <Information
        title="React JS Education"
        imageSource={require("../../assets/reactJS.jpg")}
        desc="Detailed React Native Tutorial"
      />
      <Information
        title="Javascript Education"
        imageSource={require("../../assets/js.jpg")}
        desc="Detailed Javascript Tutorial"
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
