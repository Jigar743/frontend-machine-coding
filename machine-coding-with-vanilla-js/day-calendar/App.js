import { EventCard } from "./eventCard.js";
import { apiData } from "./data.js";
import { Layout } from "./layout.js";

export class App {
  constructor() {
    this.taskData = apiData;
    this.layoutInstance = new Layout();
    this.eventCardInstance = new EventCard(this.taskData);
  }
}

new App();
