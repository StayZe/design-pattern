"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Media {
    constructor(title, dateCreated) {
        this.title = title;
        this.dateCreated = dateCreated;
    }
}
class Book extends Media {
}
class CD extends Media {
}
class DVD extends Media {
}
class Game extends Media {
}
class MediaCreator {
    addMedia(title, dateCreated) {
        const media = this.createMedia(title, dateCreated);
        console.log("Ajouté :", media);
    }
}
class BookCreator extends MediaCreator {
    createMedia(title, dateCreated) {
        return new Book(title, dateCreated);
    }
}
class CDCreator extends MediaCreator {
    createMedia(title, dateCreated) {
        return new CD(title, dateCreated);
    }
}
class DVDCreator extends MediaCreator {
    createMedia(title, dateCreated) {
        return new DVD(title, dateCreated);
    }
}
class GameCreator extends MediaCreator {
    createMedia(title, dateCreated) {
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
//# sourceMappingURL=index.js.map