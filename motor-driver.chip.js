// motor-driver.chip.js

module.exports = {
  id: 'motor-driver-chip',
  name: 'Motor Driver Chip',

  inputs: [
    {
      id: 'PWM_IN',
      name: 'PWM Input',
      type: 'pwm',
      description: 'PWM input signal',
    }
  ],

  outputs: [
    {
      id: 'PWM_OUT',
      name: 'PWM Output',
      type: 'pwm',
      description: 'PWM output signal',
    }
  ],

  setup: function () {
    // Налаштовуємо чип на обробку PWM сигналу
    this.on('PWM_IN', (value) => {
      console.log('Received PWM signal: ', value);  // Вивести значення на консоль
      this.setOutput('PWM_OUT', value); // Повертаємо сигнал
    });
  },

  loop: function () {
    // Можна додати додаткову обробку
  }
};
