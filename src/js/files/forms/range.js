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
    const snapValues = [
      textFrom,
      textTo
    ];
    item.noUiSlider.on('update', function (values, handle) {
      snapValues[handle].value = values[handle];
  });
  }

  const lengthSlider = document.querySelector('[data-length]');
  if (lengthSlider) {
    const textFrom = lengthSlider.querySelector('[data-length-from]');    
    const textTo = lengthSlider.querySelector('[data-length-to]');    
    let item = lengthSlider.querySelector('[data-length-item]');
    noUiSlider.create(item, {
      start: [Number(textFrom.value), Number(textTo.value)],
			connect: true,      
			range: {
				'min': [Number(textFrom.dataset.lengthFrom)],
				'max': [Number(textTo.dataset.lengthTo)]
			}
    });
    const snapValues = [
      textFrom,
      textTo
    ];
    item.noUiSlider.on('update', function (values, handle) {
      snapValues[handle].value = values[handle];
  });
  }

  const lengthBladeSlider = document.querySelector('[data-blide]');
  if (lengthBladeSlider) {
    const textFrom = lengthBladeSlider.querySelector('[data-blide-from]');    
    const textTo = lengthBladeSlider.querySelector('[data-blide-to]');    
    let item = lengthBladeSlider.querySelector('[data-blide-item]');
    noUiSlider.create(item, {
      start: [Number(textFrom.value), Number(textTo.value)],
			connect: true,      
			range: {
				'min': [Number(textFrom.dataset.blideFrom)],
				'max': [Number(textTo.dataset.blideTo)]
			}
    });
    const snapValues = [
      textFrom,
      textTo
    ];
    item.noUiSlider.on('update', function (values, handle) {
      snapValues[handle].value = values[handle];
  });
  }

  const widthBladeSlider = document.querySelector('[data-width]');
  if (widthBladeSlider) {
    const textFrom = widthBladeSlider.querySelector('[data-width-from]');    
    const textTo = widthBladeSlider.querySelector('[data-width-to]');    
    let item = widthBladeSlider.querySelector('[data-width-item]');
    noUiSlider.create(item, {
      start: [Number(textFrom.value), Number(textTo.value)],
			connect: true,      
			range: {
				'min': [Number(textFrom.dataset.widthFrom)],
				'max': [Number(textTo.dataset.widthTo)]
			}
    });
    const snapValues = [
      textFrom,
      textTo
    ];
    item.noUiSlider.on('update', function (values, handle) {
      snapValues[handle].value = values[handle];
  });
  }
}
rangeInit();
