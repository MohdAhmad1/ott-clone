export const CONSTANTS = Object.freeze({
  tmdbApiImgBaseURL: "https://image.tmdb.org/t/p/original",
  dummyProfilePicURL:
    "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png",
  logo: require("@assets/logo.png") as unknown as { uri: string },

  regex: {
    email:
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  },
});
