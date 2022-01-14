export class Food {
  id?: string;
  name: string;
  picture: string;
  country: string;
  category: string;
  creator: string;
  releaseDate: string;
  description: string;
  ingredients: string;
  timePreparation: string;

  constructor() {
    this.name = '';
    this.picture = '';
    this.country = '';
    this.category = '';
    this.creator = '';
    this.releaseDate = '';
    this.description = '';
    this.ingredients = '';
    this.timePreparation = '';
  }
}
