import React from 'react'
import {Snackbar as MuiSnackbar} from "@mui/material"
import {Alert} from "@mui/material"

const SnackBar = ({isOpen, onClose, massage, severity,autoHideDuration }) => {
  return (
    <>
    <MuiSnackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        anchorOrigin={{vertical: 'top', horizontal:'right'}}
      ><Alert 
            onClose={onClose}
            severity={severity} 
            sx={{width:'100%'}}>{massage}</Alert>
            </MuiSnackbar>
    </>
  )
}

export default SnackBar