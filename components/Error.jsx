import { View, Text, StyleSheet } from "react-native";
const Error = ({ errorMsg1, errorMsg2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorMsg1}</Text>
      <Text style={styles.text}>{errorMsg2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});

export default Error;
