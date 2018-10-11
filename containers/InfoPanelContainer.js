import { connect } from 'react-redux';
import { loadRoom } from '../actions/index'
import InfoPanel from '../components/InfoPanel'

const mapStateToProps = (state) => {
    return {
        roomName: state.roomName
    }
}

const mapDispatchToProps = (dispatch) => {
    return { loadRoom: () => {
        dispatch(loadRoom())
    } }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);