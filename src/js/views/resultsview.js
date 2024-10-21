import View from './view.js';
import icons from '../../img/icons.svg';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMsg = "couldn't find that recipe. pls try another one!";
  _msg = ' ';
  _generateMarkup() {
    return this._data.map(e => this._generateMarkupPreview(e)).join('');
  }
  _generateMarkupPreview(result) {
    const id = window.location.hash.slice();
    return `
    <li class="preview">
            <a class="preview__link  ${
              result.id === id ? 'preview__link--active' : ''
            } " href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
      
              </div>
            </a>
          </li>
  `;
  }
}
export default new ResultsView();
