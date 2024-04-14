import { ElMessage } from 'element-plus'

export const elMessage = (warning, message) => ElMessage({ type: warning, 
    message: message,
    showClose: true, 
    center: true, 
    grouping: true, 
    offset: 20
  })