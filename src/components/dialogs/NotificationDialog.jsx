import { ListItemText, Menu, MenuList } from '@mui/material'
import React from 'react'

const NotificationDialog = ({ closehandler, anchorEl}) => {
  return (
    <Menu anchorEl={anchorEl} open={true} onClose={closehandler}>
    <MenuList padding={{ xs: "2rem", sm: "2rem" }} sx={{width: '15rem', display: 'flex',  flexDirection:'column', alignItems: 'center'}}>

      <ListItemText textAlign={"center"}>
                0 Notification Recieved
              </ListItemText>

      
    </MenuList>
  </Menu>
  )
}

export default NotificationDialog