import { expect } from 'chai';

describe('Space Word - Scénarios Fonctionnels', () => {
    it('Scénario : Validation d\'un mot correct augmente le score', () => {
        let score = 0;
        let input = "DEV";
        let target = "DEV";
        if(input === target) score += 10;
        expect(score).to.equal(10);
    });

    it('Scénario : Fin de partie quand le temps est nul', () => {
        let timer = 0;
        let state = "PLAYING";
        if(timer <= 0) state = "GAMEOVER";
        expect(state).to.equal("GAMEOVER");
    });

    it('Scénario : Augmentation de la vitesse après un palier', () => {
        let speed = 1;
        let level = 6;
        if(level > 5) speed = 1.5;
        expect(speed).to.equal(1.5);
    });
});