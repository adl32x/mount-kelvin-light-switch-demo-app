const apiKey = 'foobar'

export const loadRoom = () => {
    return (dispatch) => {
        console.log('Loaded room info')

        fetch(`https://houmkolmonen.herokuapp.com/api/site/${apiKey}`,
            {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: 'ROOM_INFO',
                value: response.name
            })
        })
    }
}

export const lightsOn = () => {

    return (dispatch) => {
        console.log('Lights on')

        fetch(`https://houmkolmonen.herokuapp.com/api/site/${apiKey}/applyScene`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                "id": "allOn"
            })
        })

        dispatch({
            type: 'LIGHTS_ON',
            value: true
        })

    }
};

export const lightsOff = () => {

    return (dispatch) => {
        console.log('Lights off')

        fetch(`https://houmkolmonen.herokuapp.com/api/site/${apiKey}/applyScene`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                "id": "allOff"
            })
        })

        dispatch({
            type: 'LIGHTS_OFF',
            value: true
        })

    }
};