import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getMovie } from "../services/services";

const Details = ({ route, navigation }) => {
  const movieId = route.params.movieDetail;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId.id)
      .then((movieData) => {
        setMovieDetail(movieData);
        //console.log(movieDetail);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoaded(true);
        //console.log(movieDetail);
      });
  }, [movieId]);
  return (
    <React.Fragment>
      {loaded && <Text>{movieDetail.title}</Text>}
    </React.Fragment>
  );
};

export default Details;
