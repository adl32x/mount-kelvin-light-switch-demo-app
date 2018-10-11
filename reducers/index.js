const defaultState = {
    light: true,
    roomName: ''
}

const reducer = (state, action) => {

    if (typeof state === 'undefined') {
        return defaultState
    }

    switch (action.type) {
        case 'ROOM_INFO':
            state.roomName = action.value
            return { ... state }
        case 'LIGHTS_ON':
            state.light = true
            return { ...state }
        case 'LIGHTS_OFF':
            state.light = false
            return { ...state }
        default:
            return state
    }
}

export default reducer