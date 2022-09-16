import React from 'react'
import Desktop from 'src/components/Responsive/Desktop'
import Mobile from 'src/components/Responsive/Mobile'
import Tablet from 'src/components/Responsive/Tablet'

export default function TestResponsiveUpdate() {
  return (
    <div>
      <Desktop>Desktop</Desktop>
      <Mobile>Mobile</Mobile>
      <Tablet>Tablet</Tablet>
    </div>
  )
}
