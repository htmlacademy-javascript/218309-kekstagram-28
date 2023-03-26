const effectSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgEffectLevel = document.querySelector('.img-upload__effect-level');

// const effectsList = document.querySelector('.effects__list');
// const effectsRadio = effectsList.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectsEl = document.querySelector('.effects');

imgEffectLevel.classList.add('hidden');

const updateSlider = () => {
  effectSlider.noUiSlider.on('update', () => {
    effectLevelValue.value = effectSlider.noUiSlider.get();
    switch (imgUploadPreview.className) {
      case 'effects__preview--chrome':
        imgEffectLevel.classList.remove('hidden');
        imgUploadPreview.style.filter = `grayscale(${effectLevelValue.value})`;
        break;
      case 'effects__preview--sepia':
        imgEffectLevel.classList.remove('hidden');
        imgUploadPreview.style.filter = `sepia(${effectLevelValue.value})`;
        break;
      case 'effects__preview--marvin':
        // effectSlider.noUiSlider.updateOptions({
        //   range: {
        //     min: 0,
        //     max: 100,
        //   },
        //   step: 1,
        // });
        imgUploadPreview.style.filter = `invert(${effectLevelValue.value * 100}%)`;
        break;
      case 'effects__preview--phobos':
        imgUploadPreview.style.filter = `blur(${effectLevelValue.value * 3}px)`;
        break;
      case 'effects__preview--heat':
        imgUploadPreview.style.filter = `brightness(${effectLevelValue.value * 3})`;
        break;
      default:
        imgUploadPreview.style.filter = '';
        imgEffectLevel.classList.add('hidden');
        break;
    }
  });
};

function changeEffect(evt) {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  imgUploadPreview.className = `effects__preview--${evt.target.value}`;
  updateSlider();
}

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0.8,
  step: 0.1,
  connect: 'lower',
});

effectsEl.addEventListener('change', changeEffect);

// const resetEffects = () => {

// }

