class ClickCount {
    constructor() {
        this._clickCount = 0;
        this._companionCount = 0;
        this._compounderCount = 0;
        this._companionCost = 100;
        this._compounderCost = 10;
        this._clickFactor = 1;
    }

    click() {
        this._clickCount += this._clickFactor;
    }

    reset() {
        this._clickCount = 0;
        this._companionCount = 0;
        this._compounderCount = 0;
        this._companionCost = 100;
        this._compounderCost = 10;
        this._clickFactor = 1;
    }

    getCompanionCount() {
        return this._companionCount;
    }

    getCompanionCost() {
        return this._companionCost;
    }

    collectCompanion() {
        if (this._clickCount >= this.getCompanionCost()) {
            this._clickCount -= this._companionCost;
            this._companionCount++;
            this._companionCost += Math.round((this._companionCost * 0.05) + (10 * this.getCompanionCount()));
        }
    }

    getCompounderCount() {
        return this._compounderCount;
    }

    getCompounderCost() {
        return this._compounderCost;
    }

    collectCompounder() {
        if (this._clickCount >= this.getCompounderCost()) {
            this._clickCount -= this._compounderCost;
            this._compounderCount++;
            this._compounderCost += Math.round((this.getCompounderCost() * 0.25) + (10 * this.getCompounderCount()));
            if (this._clickFactor == 1) {
                this._clickFactor = 1.2;
            } else {
                this._clickFactor = (Math.pow(1.2, this._compounderCount))
            }
        }
    }

    getClickCount() {
        return this._clickCount;
    }

    cashClickCompanions() {
        for (let i = 1; i <= this.getCompanionCount(); i++) {
            this.click()
        }

    }

    getClickFactor() {
        return this._clickFactor;
    }
}