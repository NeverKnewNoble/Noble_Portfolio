import React from 'react'
import {Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <span className='canvas-loader' />
        <p style={{ fontSize: 14, color: '#171614', fontWeight: 800, marginTop: 40, fontFamily: 'JetBrains Mono, monospace'}}>
          { progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
        </p>
      </Html>
  )
}

export default CanvasLoader