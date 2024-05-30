export class FilterValue {
  key = '-';
  display = '-';
  value = false;

  constructor(data?: Partial<FilterValue>) {
    Object.assign(this, data);
  }
}
