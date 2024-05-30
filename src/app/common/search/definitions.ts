export class SearchField {
  key = '';
  display = '';
  value = false;

  constructor(data: Partial<SearchField>) {
    Object.assign(this, data);
  }
}
