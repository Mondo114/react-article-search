import axios from "axios";

const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY   = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryFix = "&q=";

const API = {
  // Retrieves all articles from the db
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves a new article to the db
  saveArticle: function(article) {
    console.log(article)
    return axios.post("/api/articles", article);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    console.log('in API delete article ')
    return axios.delete(`/api/articles/${id}`);
  },
  // Toggles an article's favorite property in the db
  favoriteArticle: function(article) {
    article.favorited = !article.favorited;
    const { _id, favorited } = article;
    return axios.patch(`/api/articles/${_id}`, { favorited });
  },
  search: function(query) {
  	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
    return axios.get(BASEURL + APIKEY + queryFix + query);
  }
};

export default API;

