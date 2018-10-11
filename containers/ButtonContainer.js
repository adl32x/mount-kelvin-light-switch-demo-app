import { connect } from 'react-redux';
import { lightsOn, lightsOff } from '../actions';
import Buttons from '../components/Buttons'

const mapStateToProps = (state) => {
    return {
        light: state.light
    }
}

const mapDispatchToProps = (dispatch) => {
	return { 
        lightsOn: () => { dispatch(lightsOn()) },
        lightsOff: () => { dispatch(lightsOff()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)