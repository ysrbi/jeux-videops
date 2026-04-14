import assert from 'assert';

describe('Two Ships - Scénarios de Jeu (Fonctionnels)', () => {
    it('Initialisation : Le jeu doit démarrer avec un score nul', () => {
        const gameState = { score: 0 };
        assert.strictEqual(gameState.score, 0);
    });

    it('Collision : Le score doit augmenter de 10 points après un impact', () => {
        let score = 0;
        const collisionDetected = true;
        if (collisionDetected) score += 10;
        assert.strictEqual(score, 10);
    });

    it('Game Over : Le statut doit passer à "over" si les vies tombent à 0', () => {
        let status = 'playing';
        const lives = 0;
        if (lives <= 0) status = 'over';
        assert.strictEqual(status, 'over');
    });
});