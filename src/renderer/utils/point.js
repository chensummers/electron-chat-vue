import Storage from './storage';
import {isJson} from "./type";

export default class BuryingPoint {
  constructor(options) {
    this.params = options;
  }

  // init(options) {
  //   let _target = Object.assign({}, options);
  //   this.params = _target;
  // }

  setBuryingPoint(action, options) {
    let _params = Object.assign({}, this.params, options);
    fh.track(action, _params)
  }

  setBuryingPointData(key, value) {
    let _data = Storage.uniGetData('buryingPointData');
    _data = _data ? (isJson(_data) ? JSON.parse(_data) : _data) : {};
    _data[key] = value;
    Storage.uniSetData('buryingPointData', _data);
  }

  getBuryingPointData() {
    return Storage.uniGetData('buryingPointData');
  }
}
