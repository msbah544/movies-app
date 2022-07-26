    //GET UPCOMING MOVIES
    /*getUpcomingMovies()
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
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoaded(true));*/
