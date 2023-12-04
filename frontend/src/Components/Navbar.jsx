import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Stack direction={['column', 'row']} spacing='24px'>
        <Link to="/contact">Contact Management</Link>
        <Link to="/appointment">Appointment Scheduling</Link>
    </Stack>
  )
}

export default Navbar
