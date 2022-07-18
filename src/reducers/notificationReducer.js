import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { notification: '', timeout: null },
  reducers: {
    changeNotification(state, action) {
      return {
        ...state,
        notification: action.payload.notification,
        timeout: action.payload.timeout,
      }
    },
    clearNotification(state) {
      return {
        ...state,
        notification: '',
      }
    },
  },
})

export const setNotification = (notification, seconds, timeoutbefore) => async (dispatch) => {
  try {
    const time = seconds * 1000
    if (timeoutbefore !== null) {
      clearTimeout(timeoutbefore)
    }
    const timeout = setTimeout(() => {
      dispatch(clearNotification())
    }, time)
    dispatch(changeNotification({ notification: notification, timeout: timeout }))
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error)
    /* eslint-enable no-console */
  }
}

export const { changeNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer
