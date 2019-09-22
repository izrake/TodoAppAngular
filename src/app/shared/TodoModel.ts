export class TodoModel {
  
    constructor(public ItemId: number,
      public Description: string,
      public CreationDate: Date,
      public Status: Status) {
      
    }
  }
  export enum Status {
    Active = 'Active',
    Completed = 'Completed',
    Deleted = 'Deleted',
    NotStarted = "NotStarted"
  }