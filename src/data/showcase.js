// 3D model positioning/camera values for the Showcase section.
// Returns the config tuned for mobile vs. desktop viewports.
export function getShowcaseModelConfig(isMobile) {
  return {
    scale: isMobile ? 3.8 : 3.8,
    position: [
      isMobile ? 0 : 0, // x
      isMobile ? -2 : -6, // y
      isMobile ? 0 : 0, // z
    ],
    rotation: [
      (isMobile ? 0 : 0) * Math.PI / 180, // x
      (isMobile ? 0 : 0) * Math.PI / 180, // y
      (isMobile ? 0 : 0) * Math.PI / 180, // z
    ],
    cameraZ: isMobile ? 18 : 25,
  }
}
