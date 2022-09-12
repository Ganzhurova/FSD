import addIonRangeSlider from '../../libs/ion-rangeslider/addIonRangeSlider';
import '../../libs/ion-rangeslider/ion-rangeslider.scss';
import config from './config';
import './range.scss';
import updateInputs from './updateInputs';

addIonRangeSlider('.js-range-slider', {
  ...config,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs,
});
