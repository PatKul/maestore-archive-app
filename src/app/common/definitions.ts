/****************************************************
 * Sort function definitions
 */
export enum SortOrderEnum {
  Asc = 'asc',
  Desc = 'desc',
  None = 'none',
}

export class SortField {
  private _name: string;
  private _order: SortOrderEnum;

  constructor(name: string, order: SortOrderEnum = SortOrderEnum.None) {
    this._name = name;
    this._order = order;
  }

  get name(): string {
    return this._name;
  }

  get order(): SortOrderEnum {
    return this._order;
  }

  get hasNoSort() {
    return this._order === SortOrderEnum.None;
  }

  get isAscending() {
    return this._order === SortOrderEnum.Asc;
  }

  get isDescending() {
    return this._order === SortOrderEnum.Desc;
  }

  /**
   * Toggle sort order
   * @returns SortField - new instance ensure immutability
   */
  toggle(): SortField {
    console.debug('toggle', this._name, this._order);

    if (this._order === SortOrderEnum.Asc) {
      this._order = SortOrderEnum.Desc;
    } else {
      this._order = SortOrderEnum.Asc;
    }

    return new SortField(this._name, this._order);
  }

  /**
   * Reset sort order
   * @returns SortField - new instance ensure immutability
   */
  reset(): SortField {
    this._order = SortOrderEnum.None;

    return new SortField(this._name, this._order);
  }
}
