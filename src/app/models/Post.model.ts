export class Post {
    public id: number;

    constructor(
      public title: string,
      public content: string,
      public loveIts: number = 0,
      public created_at: Date = new Date()
    ) {}
}
