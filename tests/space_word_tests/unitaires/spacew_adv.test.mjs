import { expect } from 'chai';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rectIntersect = (x1, y1, w1, h1, x2, y2, w2, h2) => {
    return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
};
const circleIntersect = (x1, y1, r1, x2, y2, r2) => {
    const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return dist < r1 + r2;
};
const timeToString = (time) => {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    return `${formattedMM}:${formattedSS}:00`;
};

describe('Space Word - Tests Unitaires Avancés (Perso)', () => {
    it('circleIntersect : détection de collision', () => {
        expect(circleIntersect(0,0,5, 0,8,5)).to.be.true;
    });
    it('timeToString(0) : cas limite zéro', () => {
        expect(timeToString(0)).to.equal("00:00:00");
    });
    it('getRandomInt(10, 20) : borne minimale', () => {
        expect(getRandomInt(10, 20)).to.be.at.least(10);
    });
    it('rectIntersect : collision partielle', () => {
        expect(rectIntersect(0,0,10,10, 5,5,10,10)).to.be.true;
    });
    it('circleIntersect : sans collision', () => {
        expect(circleIntersect(0,0,1, 10,10,1)).to.be.false;
    });
});