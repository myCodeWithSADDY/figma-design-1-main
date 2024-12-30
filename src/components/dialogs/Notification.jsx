import { Badge, IconButton, Tooltip } from '@mui/material'
import React from 'react'

const Notification = ({title, value, icon, onClick}) => {
  return (
    <>
    <Tooltip title={title}>
    <IconButton size="large" color="inherit" onClick={onClick}>
      {value ? (
        <Badge badgeContent={value} color="error">
          {icon}
        </Badge>
      ) : (
        icon
      )}

    </IconButton>
  </Tooltip>

  
  </>
  )
}

export default Notification