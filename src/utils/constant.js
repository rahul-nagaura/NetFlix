export const constant_log = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const HOME_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg";

// const API_Key = "9f76a499601f8f3bfdf00e2dd802f773";

// const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Zjc2YTQ5OTYwMWY4ZjNiZmRmMDBlMmRkODAyZjc3MyIsIm5iZiI6MTcyMDcxMTA4NS45MDA3NjUsInN1YiI6IjY2OGZkNWJkMjkzMDllMDNmZDM0OTlmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FX6a-R9DjqrQqXR1ZtGSsc8eMSBR1IEFi9B9ZtpLkNo";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_Authorization
    }
  };


export const IMAGE_CDN = "https://image.tmdb.org/t/p/w780//";

export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const SUPPORT_LANGUAGES = [
  {identifire: "en", name:"English"},
  {identifire: "hindi", name:"Hindi"},
  {identifire: "spanish", name:"Spanish"}
]


export const gptkey = process.env.REACT_APP_gptkey;

