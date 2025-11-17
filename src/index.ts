abstract class Media {
  constructor(
    public title: string, 
    public dateCreated: Number
) {}
}

class Book extends Media {}
class CD extends Media {}
class DVD extends Media {}
class Game extends Media {}

abstract class MediaCreator {
  abstract createMedia(title: string, dateCreated: number): Media;

  addMedia(title: string, dateCreated: number) {
    const media = this.createMedia(title, dateCreated);
    console.log("Ajouté :", media);
  }
}

class BookCreator extends MediaCreator {
  createMedia(title: string, dateCreated: number): Media {
    return new Book(title, dateCreated);
  }
}

class CDCreator extends MediaCreator {
  createMedia(title: string, dateCreated: number): Media {
    return new CD(title, dateCreated);
  }
}

class DVDCreator extends MediaCreator {
  createMedia(title: string, dateCreated: number): Media {
    return new DVD(title, dateCreated);
  }
}

class GameCreator extends MediaCreator {
  createMedia(title: string, dateCreated: number): Media {
    return new Game(title, dateCreated);
  }
}

const library1 = new BookCreator();
library1.addMedia("Le Seigneur des Anneaux", 1954);

const library2 = new CDCreator();
library2.addMedia("Thriller - Michael Jackson", 1982);

const library3 = new DVDCreator();
library3.addMedia("Tenet - Christopher Nolan", 2020);

const library4 = new GameCreator();
library4.addMedia("Elden Ring", 2022);
