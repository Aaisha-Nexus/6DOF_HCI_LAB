export function setupControls(cube) {

  const move = 0.05;
  const rot = 0.05;

  window.addEventListener("keydown", (e) => {

    // TRANSLATION (moving the cubw without turning it or changing its size)
    if (e.key === "ArrowLeft") cube.position.x -= move;
    if (e.key === "ArrowRight") cube.position.x += move;
    if (e.key === "ArrowUp") cube.position.y += move;
    if (e.key === "ArrowDown") cube.position.y -= move;

    // POSITION (where the cube is in the 3D world)
    if (e.key === "w") cube.position.z -= move;
    if (e.key === "s") cube.position.z += move;

    // ROTATION (turning the cube around its center)
    if (e.key === "x") cube.rotation.x += rot;
    if (e.key === "y") cube.rotation.y += rot;
    if (e.key === "z") cube.rotation.z += rot;
  });
}