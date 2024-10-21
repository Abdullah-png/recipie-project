import * as model from './model.js';
import recipeView from './views/recipeview.js';
import icons from 'url:../img/icons.svg';
import searchview from './views/searchview.js';
import resultsView from './views/resultsview.js';
import BookmarksView from './views/bookmarksview.js';
import paginationView from './views/paginationview.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// console.log(icons);
// const recipeContainer = document.querySelector('.recipe');

// if (module.hot) {
//   module.hot.accept();
// }
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    // recipeView.renderSpinner();
    // 01 loading recipie

    if (!id) return;

    resultsView.update(model.getSearchResultPage());
    BookmarksView.update(model.state.bookmarks);

    await model.loadRecipe(id);
    //render recipe
    recipeView.render(model.state.recipe);
    //TEST
    // controlServings();
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    // resultsView.renderSpinner();

    const query = searchview.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    resultsView.render(model.getSearchResultPage());

    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  console.log(goToPage);
  resultsView.render(model.getSearchResultPage(goToPage));

  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update The Recipe Servings
  model.updateServings(newServings);
  // Update Recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  console.log(model.state.recipe);

  recipeView.update(model.state.recipe);
  // Render Bookmark
  console.log(model.state.bookmarks);
  BookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchview.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};
init();
// window.addEventListener('hashchange', controlRecipe);
