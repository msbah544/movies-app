import { View, FlatList, Text, StyleSheet } from "react-native";
import Card from "./Card";

const List = ({ movies, title, navigation }) => {
  return (
    <View>
      <View style={styles.list}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Card navigation={navigation} item={item} />
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});

export default List;
