$(function () {
  "use strict";

  // Parallax scrolling
  var $a = $(".bs-header-after"),
      $w = $('body');
  if (!('ontouchstart' in window)) {
    $(window).unbind("scroll").scroll(function () {
      $a.css('transform', 'translate3d(0, ' + ($w.scrollTop() * 0.15) + 'px, 0)');
      $('.bs-top').css('opacity', 1 - ($w.scrollTop() / ($a.height() - 500)));
    });
  }

  // code highlighting
  window.prettyPrint();

  if (Modernizr.webglenabled) {
    (function spinningSphere() {
      var THREE = window.THREE;
      var $container = $("#spinner");
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 45, $container.width() / $container.height(), 0.1, 1000 );
      camera.position.z = 10;
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize($container.width(), $container.height());
      $(renderer.domElement).appendTo($container);
      renderer.setClearColorHex(0xffffff, 1.0);
      renderer.clear();

      var cube = new THREE.Mesh(
        new THREE.SphereGeometry(2, 64, 64),
        new THREE.MeshLambertMaterial({color: 0xffffff}));
      scene.add(cube);

      var light = new THREE.SpotLight();
      light.position.set( -10, 20, 16 );
      scene.add(light);
      renderer.render(scene, camera);

      function animate(t) {
        camera = new THREE.PerspectiveCamera( 45, $container.width() / $container.height(), 0.1, 1000 );
        renderer.setSize($container.width() -2, $container.height()-2);
        camera.position.x = Math.sin(t/500)*10;
        camera.position.y = 0;
        camera.position.z = Math.cos(t/500)*10;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate, renderer.domElement);
      }
      animate(new Date().getTime());
    })();

    (function staticSphere() {
      var THREE = window.THREE;
      var $container = $("#staticsphere");
      var scene = new THREE.Scene();
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize($container.width(), $container.height());
      $(renderer.domElement).appendTo($container);
      renderer.setClearColorHex(0xffffff, 1.0);
      renderer.clear();

      var cube = new THREE.Mesh(
        new THREE.SphereGeometry(2, 64, 64),
        new THREE.MeshLambertMaterial({color: 0xffffff}));
      scene.add(cube);

      var light = new THREE.SpotLight();
      light.position.set( -10, 20, 16 );
      scene.add(light);
      var camera = new THREE.PerspectiveCamera( 45, $container.width() / $container.height(), 0.1, 1000 );
      camera.position.z = 10;
      camera.position.x = 0;
      camera.position.y = 0;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    })();
  }
});