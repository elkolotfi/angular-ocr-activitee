export class Post {

  // tslint:disable-next-line:variable-name
  private _title: string;
  // tslint:disable-next-line:variable-name
  private _content: string;
  // tslint:disable-next-line:variable-name
  private _loveIt: number;
  // tslint:disable-next-line:variable-name
  private _createdAt: Date;

  constructor(title: string, content: string, loveIt: number) {
      this._createdAt = new Date();

      this._title = title;
      this._content = content;
      this._loveIt = loveIt;
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

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }
}
