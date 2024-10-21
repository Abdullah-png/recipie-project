import View from './view';

class SearchView extends View {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this.clearInput();
    return query;
  }

  clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
}
export default new SearchView();
