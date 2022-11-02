// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
//import 'nouislider/dist/nouislider.css';

export function rangeInit() {
  const priceSlider = document.querySelector('[data-range]');
  if (priceSlider) {
    const textFrom = priceSlider.querySelector('[data-range-from]');
    const textTo = priceSlider.querySelector('[data-range-to]');
    let item = priceSlider.querySelector('[data-range-item]');
    noUiSlider.create(item, {
      start: [Number(textFrom.value), Number(textTo.value)],
			connect: true,
      tooltips: [true, true],
			range: {
				'min': [Number(textFrom.dataset.rangeFrom)],
				'max': [Number(textTo.dataset.rangeTo)]
			}
    });
    item.noUiSlider.on('update', function (values, handle) {
      textFrom.value = values[handle];
      textTo.value = values[handle];
  });
  }
}
rangeInit();
