import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js";

// シーン
const scene = new THREE.Scene();

// カメラ
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// レンダラー
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// シーンに物体を描画する
// 1:1:1の立方体を指定?
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 立体の表面を覆うマテリアルを指定?
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 作成メソッドの呼び出し?
const cube = new THREE.Mesh(geometry, material);

// シーンの追加
scene.add(cube);

// カメラを少し外側へ移動
camera.position.z = 5;

// アニメーションを定義
const animate = () => {
  // 回転
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  //レンダリング
  renderer.render(scene, camera);
};

// アニメーションをループさせる
renderer.setAnimationLoop(animate);
