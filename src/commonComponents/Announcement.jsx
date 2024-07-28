import React from 'react'
import {styled,Box} from "@mui/material"

const Container = styled(Box)`
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
         Lorem ipsum dolor sit amet consectetur adipisicing elit add.
      </Container>
    
  )
}

export default Announcement