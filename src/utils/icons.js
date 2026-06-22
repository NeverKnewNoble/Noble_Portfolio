// Helpers for building external icon/logo CDN URLs used by the Skills section.

// Monochrome icon from the Iconify CDN (ink-colored for light backgrounds)
export const getIconifyUrl = (name) =>
  `https://api.iconify.design/${name}.svg?color=%23171614`

// Original colored logo from the devicons CDN
export const getDeviconUrl = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`
