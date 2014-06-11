(function () {
  var _selfie = {
    applyOne: function (objectName) {
      var _selfieObject = window[objectName];
      if (!_selfieObject) return;

      for (var p in _selfieObject) {
        if (typeof (_selfieObject[p]) == 'function') {
          var f_s = _selfieObject[p].toString();
          f_s = f_s.replace(/_self/g, objectName);
          _selfieObject[p] = eval('var changed = ' + f_s + '; changed');
        }
      }
      if (_selfieObject['init']) _selfieObject['init']();
    },
    apply: function (objectNames) {
      if (!objectNames) return;
      objectNames = (typeof (objectNames) === 'string') ? [objectNames] : objectNames;
      for (var iDx in objectNames) {
        if (typeof(objectNames[iDx])==='string') _selfie.applyOne(objectNames[iDx]);
      }
    }
  };

  window['_selfie'] = _selfie;
})();