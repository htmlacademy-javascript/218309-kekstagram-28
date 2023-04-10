const SCALE_DEFAULT = 100;
const MIN_SCALE = 25;

const uploadScaleImg = document.querySelector('.img-upload__scale');
const scaleControlSmaller = uploadScaleImg.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadScaleImg.querySelector('.scale__control--bigger');
const scaleControlValue = uploadScaleImg.querySelector('.scale__control--value');
const UploadPreviewImg = document.querySelector('.img-upload__preview img');

const scaleImg = (value) => {
  UploadPreviewImg.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const onScaleControlSmaller = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - MIN_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImg(newValue);
};

const onscaleControlBigger = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + MIN_SCALE;
  if (newValue > SCALE_DEFAULT) {
    newValue = SCALE_DEFAULT;
  }
  scaleImg(newValue);
};

const resetScale = () => scaleImg(SCALE_DEFAULT);

scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
scaleControlBigger.addEventListener('click', onscaleControlBigger);

export { resetScale };

