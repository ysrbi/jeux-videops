import assert from 'assert';
import { mapLinear, lerp, clamp } from '../../../games/two_ships/src/math.js';

describe('Two Ships - Logique Avancée (Perso)', () => {
    it('lerp(0, 10, 0.5) should return 5', () => {
        assert.strictEqual(lerp(0, 10, 0.5), 5);
    });
    it('clamp(15, 0, 10) should return 10', () => {
        assert.strictEqual(clamp(15, 0, 10), 10);
    });
    it('mapLinear(5, 0, 10, 0, 100) should return 50', () => {
        assert.strictEqual(mapLinear(5, 0, 10, 0, 100), 50);
    });
    it('lerp(-10, 10, 0.5) should return 0', () => {
        assert.strictEqual(lerp(-10, 10, 0.5), 0);
    });
    it('clamp(-5, 0, 10) should return 0', () => {
        assert.strictEqual(clamp(-5, 0, 10), 0);
    });
});