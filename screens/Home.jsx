import {
  StyleSheet,
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
import Error from "../components/Error";

const Home = ({ navigation }) => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState();
  const [popularTV, setPopularTV] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const dimensions = Dimensions.get("screen");

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upComingMoviesData,
          popularMoviesData,
          popularTVData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const movieImagesArray = [];
          upComingMoviesData.results.forEach((movie) => {
            movieImagesArray.push(
              "https://image.tmdb.org/t/p/w500" + movie.poster_path
            );
          });
          setUpComingMovies(movieImagesArray);
          setPopularMovies(popularMoviesData.results);
          setPopularTV(popularTVData.results);
          setFamilyMovies(familyMoviesData.results);
          setDocumentaryMovies(documentaryMoviesData.results);
        }
      )
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <React.Fragment>
      {loaded && !error && (
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
              <List
                movies={popularMovies}
                title="Popular Movies"
                navigation={navigation}
              />
            </View>
          )}
          {popularTV && (
            <View style={styles.carousel}>
              <List
                movies={popularTV}
                title="Popular TV"
                navigation={navigation}
              />
            </View>
          )}
          {familyMovies && (
            <View style={styles.carousel}>
              <List
                movies={familyMovies}
                title="Family Movies"
                navigation={navigation}
              />
            </View>
          )}
          {documentaryMovies && (
            <View style={styles.carousel}>
              <List
                movies={documentaryMovies}
                title="Documentary Movies"
                navigation={navigation}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && (
        <ActivityIndicator style={styles.loadingComponent} size="large" />
      )}
      {error && (
        <Error errorMsg1="Unexpected Error" errorMsg2="Network/Server error" />
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

export default Home;
