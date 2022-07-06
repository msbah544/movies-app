import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { SliderBox } from "react-native-image-slider-box";

const App = () => {
  const [loading, setIsLoading] = useState(true);
  //const [data, setData] = useState("data");
  const [error, setError] = useState(false);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const loadingMsg = "loading...";
  const dimensions = Dimensions.get("screen");

  const getPopularMovies = async () => {
    return await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=da2285ac0fa6b3d48c769beec4e32cb4"
      )
      .then((response) => {
        const { data } = response;
        const movieImagesArray = [];
        data.results.forEach((movie) =>
          movieImagesArray.push(
            "https://image.tmdb.org/t/p/w500" + movie.poster_path
          )
        );

        setUpComingMovies(movieImagesArray);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  //getPopularMovies();

  return (
    <View style={styles.contents}>
      <View>
        {loading ? (
          <Text>{loadingMsg}</Text>
        ) : error ? (
          <Text style={{ color: "red" }}>Server error!</Text>
        ) : (
          <SliderBox
            images={upComingMovies}
            circleLoop={true}
            autoplay={true}
            sliderBoxHeight={dimensions.height / 1.5}
            dotStyle={{ height: 0 }}
          />
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
