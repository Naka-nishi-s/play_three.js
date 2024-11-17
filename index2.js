import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js";

// サイズを指定
const width = window.innerWidth;
const height = window.innerHeight;

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
});
renderer.setSize(width, height);

// シーンを作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 球体を作成
const radius = 100;

const geometry = new THREE.SphereGeometry(radius, 30, 30);
// const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
// const material = new THREE.MeshToonMaterial({ color: 0xff0000 });
// const material = new THREE.MeshMatcapMaterial({ color: 15750274 });
const material = new THREE.MeshBasicMaterial({ color: 15750274 });
// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = -width / 2 + width * 0.2; // 左端から20%の位置
mesh.position.x = -400;
mesh.position.y = -200; // 垂直方向は中央

// 3D空間にメッシュを追加
scene.add(mesh);

// 平行光源
// 部分的に明るくする
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

// 全体的に明るくする
// const directionalLight = new THREE.AmbientLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

// アニメーションを定義
const animate = () => {
  // 回転
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;

  //レンダリング
  renderer.render(scene, camera);
};

// アニメーションをループさせる
renderer.setAnimationLoop(animate);
