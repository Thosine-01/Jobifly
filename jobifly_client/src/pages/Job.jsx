import React from 'react'
import { useParams } from 'react-router'

const Job = () => {
    const paramsId = useParams()
    console.log('paramsId:', paramsId)
  return (
    <div>Job</div>
  )
}

export default Job