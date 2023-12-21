export default class Interaction {
    image;
    divElement;
    constructor(id) {
        this.divElement = document.getElementById(id);
        this.image = document.createElement('img');
    }
    buttonEvent() {
    }
    deleteButtons() {
        while (this.divElement.firstChild) {
            this.divElement.removeChild(this.divElement.firstChild);
        }
    }
    getImage() {
        return this.image;
    }
}
//# sourceMappingURL=Interaction.js.map