const SCALE_DEFAULT = 100;

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
  let newValue = currentValue - 25;
  if (newValue < 25) {
    newValue = 25;
  }
  scaleImg(newValue);
};

const onscaleControlBigger = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + 25;
  if (newValue > 100) {
    newValue = 100;
  }
  scaleImg(newValue);
};

const resetScale = () => scaleImg(SCALE_DEFAULT);

scaleControlSmaller.addEventListener('click', onScaleControlSmaller);
scaleControlBigger.addEventListener('click', onscaleControlBigger);

export { resetScale };

