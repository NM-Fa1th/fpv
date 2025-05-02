module.exports = {
  pins: {
    PWM_IN: {
      type: "din",
      onSignal(state) {
        const now = this.context.time;
        if (state) {
          this._lastRise = now;
          if (this._lastFall) this._lowTime = this._lastRise - this._lastFall;
        } else {
          this._lastFall = now;
          if (this._lastRise) {
            this._highTime = this._lastFall - this._lastRise;
            const period = this._highTime + this._lowTime;
            if (period > 0) {
              const freq = 1_000_000 / period;
              const duty = (this._highTime / period) * 100;
              console.log(`Частота: ${freq.toFixed(1)} Гц, Заповнення: ${duty.toFixed(1)}%`);
            }
          }
        }
      }
    }
  }
};
