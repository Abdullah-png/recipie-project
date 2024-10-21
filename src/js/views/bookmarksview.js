import View from './view.js';

import icons from '../../img/icons.svg';
import previewView from './previewview.js';
class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMsg = 'no bookmarks yet find a recipe to bookmark ;)';
  _msg = ' ';
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new BookmarksView();
