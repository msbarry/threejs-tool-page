Modernizr.addTest('webglenabled', function() {
  var canvas = document.createElement('canvas');
  if ('supportsContext' in canvas) {
    return canvas.supportsContext('webgl') || canvas.supportsContext('experimental-webgl');
  }
  return !!window.WebGLRenderingContext;
});