import Capybara from '../Capybara.js';
import Fox from '../Fox.js';
import Hedgehog from '../Hedgehog.js';
import Raccoon from '../Raccoon.js';
import Squirrel from '../Squirrel.js';
import Wolf from '../Wolf.js';
export default class DialogMemmory {
    static cabibaraLastLine = 0;
    static hedgehogeLastLine = 0;
    static squirellLastLine = 0;
    static wolfLastLine = 0;
    static racoonLastLine = 0;
    static foxLastLine = 0;
    static storeTheLastLine(animal, lastLine) {
        if (animal instanceof Capybara) {
            this.cabibaraLastLine = lastLine;
        }
        else if (animal instanceof Fox) {
            this.foxLastLine = lastLine;
        }
        else if (animal instanceof Squirrel) {
            this.squirellLastLine = lastLine;
        }
        else if (animal instanceof Hedgehog) {
            this.hedgehogeLastLine = lastLine;
        }
        else if (animal instanceof Wolf) {
            this.wolfLastLine = lastLine;
        }
        else if (animal instanceof Raccoon) {
            this.racoonLastLine = lastLine;
        }
    }
    static getLastLine(animal) {
        if (animal instanceof Capybara) {
            return this.cabibaraLastLine;
        }
        if (animal instanceof Fox) {
            return this.foxLastLine;
        }
        if (animal instanceof Squirrel) {
            return this.squirellLastLine;
        }
        if (animal instanceof Hedgehog) {
            return this.hedgehogeLastLine;
        }
        if (animal instanceof Wolf) {
            return this.wolfLastLine;
        }
        if (animal instanceof Raccoon) {
            return this.racoonLastLine;
        }
        return null;
    }
}
//# sourceMappingURL=DialogMemmory.js.map