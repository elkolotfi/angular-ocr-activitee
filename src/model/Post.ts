export class Post {

  // tslint:disable-next-line:variable-name
  private _title: string;
  // tslint:disable-next-line:variable-name
  private _content: string;
  // tslint:disable-next-line:variable-name
  private _loveIt: number;
  // tslint:disable-next-line:variable-name
  private _createdAt: number; // Timestamp

  constructor(title: string, content: string, loveIt?: number, createdAt?: number) {
      this._createdAt = createdAt ? createdAt : new Date().getTime();

      this._title = title ? title : '';
      this._content = content ? content : '';
      this._loveIt = loveIt ? loveIt : 0;
  }

  /**
   * Firebase returns only instance of objects and not Posts models
   * Thus we use this converter to format the object to the right instance
   *
   * @param o object to format
   */
  static format(o: any) {
    if (o instanceof Object) {
      return new Post(o._title, o._content, o._loveIt, o._createdAt);
    }
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get loveIt(): number {
    return this._loveIt;
  }

  set loveIt(value: number) {
    this._loveIt = value;
  }

  get createdAt(): number {
    return this._createdAt;
  }

  set createdAt(value: number) {
    this._createdAt = value;
  }
}
