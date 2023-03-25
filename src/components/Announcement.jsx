import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   width: 100%;
   background-color: teal;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
`
const Announcement = () => {
  return (
      <Container>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Container>
    
  )
}

export default Announcement