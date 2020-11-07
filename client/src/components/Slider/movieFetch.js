import movieTrailer from "movie-trailer";

export const firstAttempt = async (movie, setTrailerUrl) => {
  const firstData = await movieFetch(movie, setTrailerUrl);
  if (firstData === false) {
    setTrailerUrl("eW7Twd85m2g");
  }
};

export const movieFetch = async (movie, setTrailerUrl) => {
  let extracted;
  if (movie.name !== undefined) {
    extracted = movie.name;
  } else if (movie.original_name !== undefined) {
    extracted = movie.original_name;
  } else if (movie.title !== undefined) {
    extracted = movie.title;
  } else if (movie.original_title !== undefined) {
    extracted = movie.original_title;
  }
  let data = extracted;
  if (extracted.includes(" ")) {
    data = extracted.split(" ");
    if (data[0].toLowerCase() == "the") {
      if (data[1].includes("'")) {
        data = data[2];
      } else {
        data = data[1];
      }
    } else {
      data = data[0];
    }
  }
  let url;
  try {
    url = await movieTrailer(data, { multi: true } || "");
  } catch (e) {
    return false;
  }
  let urlParams;
  if (url[1]) {
    urlParams = new URLSearchParams(new URL(url[1]).search);
  } else {
    urlParams = new URLSearchParams(new URL(url[0]).search);
  }
  const vLink = await urlParams.get("v");
  setTrailerUrl(vLink);
  return vLink;
};
