import View from './view.js';
import icons from '../../img/icons.svg';
class PreviewView extends View {
  _parentElement = '';
  _generateMarkup() {
    console.log(this._data);
    const id = window.location.hash.slice();
    return `
    <li class="preview">
            <a class="preview__link  ${
              this._data.id === id ? 'preview__link--active' : ''
            } " href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
      
              </div>
            </a>
          </li>
  `;
  }
}
export default new PreviewView();
