class Enemiebar extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange100.png'
    ];

    percentage = 100;


    /**
     * This function set all start conditions for the object.
     */

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = 440;
        this.height = 45;
        this.width = 145;
        this.setPercantage(100);
    }

    /**
     * @param {number} percantage - Current percantage.
     * Sets the current percentage value. 
     */


    setPercantage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }

    /**
     * @returns Shows the matching image to the percentage.
     */

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
