import * as React from 'react'
import {useCycle, Frame} from 'framer'


export default function Cycle() {
    const [twist, cycle] = useCycle(
      { scale: 0.5, rotate: 0 },
      { scale: 1, rotate: 90 }
    )
  
    return <Frame animate={twist} onTap={() => cycle()} />
  }