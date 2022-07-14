import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SliderBox } from "react-native-image-slider-box";
import {
  getUpcomingMovies,
  getPopularMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaryMovies,
} from "../services/services";
import List from "../components/List";

const App = () => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState();
  const [popularTV, setPopularTV] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const dimensions = Dimensions.get("screen");

  useEffect(() => {
    //GET UPCOMING MOVIES
    getUpcomingMovies()
      .then((response) => {
        const { data } = response;
        const movieImagesArray = [];
        data.results.forEach((movie) =>
          movieImagesArray.push(
            "https://image.tmdb.org/t/p/w500" + movie.poster_path
          )
        );
        setUpComingMovies(movieImagesArray);
      })
      .catch((err) => {});
    //GET POPULAR MOVIES
    getPopularMovies()
      .then((response) => {
        const { data } = response;
        setPopularMovies(data.results);
      })
      .catch((err) => {});
    //GET POPULAR TV
    getPopularTv()
      .then((response) => {
        const { data } = response;
        setPopularTV(data.results);
      })
      .catch((err) => {});
    //GET FAMILY MOVIES
    getFamilyMovies()
      .then((response) => {
        const { data } = response;
        setFamilyMovies(data.results);
      })
      .catch((err) => {});
    //GET FAMILY MOVIES
    getDocumentaryMovies()
      .then((response) => {
        const { data } = response;
        setDocumentaryMovies(data.results);
      })
      .catch((err) => {})
      .finally(() => setLoaded(true));
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <View style={styles.sliderContainer}>
            {upComingMovies && (
              <SliderBox
                images={upComingMovies}
                circleLoop={true}
                autoplay={true}
                sliderBoxHeight={dimensions.height / 1.5}
                dotStyle={{ height: 0 }}
              />
            )}
          </View>

          {popularMovies && (
            <View style={styles.carousel}>
              <List movies={popularMovies} title="Popular Movies" />
            </View>
          )}
          {popularTV && (
            <View style={styles.carousel}>
              <List movies={popularTV} title="Popular TV" />
            </View>
          )}
          {familyMovies && (
            <View style={styles.carousel}>
              <List movies={familyMovies} title="Family Movies" />
            </View>
          )}
          {documentaryMovies && (
            <View style={styles.carousel}>
              <List movies={documentaryMovies} title="Documentary Movies" />
            </View>
          )}

          <StatusBar style="auto" />
        </ScrollView>
      )}
      {!loaded && (
        <ActivityIndicator style={styles.loadingComponent} size="large" />
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carousel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingComponent: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
