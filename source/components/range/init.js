import './range.scss';
import addIonRangeSlider from '../../libs/ion-rangeslider/addIonRangeSlider';
import config from './config';
import updateInputs from './updateInputs';

addIonRangeSlider('.js-range-slider', {
  ...config,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs,
});
