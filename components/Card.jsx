import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
const backupImage = require("../assets/images/image-gallery.png");
const Card = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { movieDetail: item })}
    >
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? {
                uri: "https://image.tmdb.org/t/p/w500" + item.poster_path,
              }
            : backupImage
        }
      />
      {!item.poster_path && <Text style={styles.movieTitle}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: "relative",
    height: 200,
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieTitle: {
    width: 100,
    position: "absolute",
    textAlign: "center",
    top: 10,
  },
});

export default Card;
