import React from 'react'

import { AlgarismList, Algarism } from './styles'
import data from './data'

const Algarisms: React.FC = () => {
  return (
    <AlgarismList>
      {data.map((algarism, index) => (
        <Algarism
          key={`${index}`}
          duration={algarism.duration}
          delay={algarism.delay}
          fontSize={algarism.fontSize}
          position={algarism.position}
          data-text={algarism.content}
        >
          {algarism.content}
        </Algarism>
      ))}
    </AlgarismList>
  )
}

export default Algarisms
