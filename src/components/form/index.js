import MyForm from './component';
import { connect } from 'react-redux';
import { login } from '../../core/actions';
import { dispatch } from '../../App'

const mapStateToProps = (state) => ({
    onSubmit: (data) => dispatch(login(data))
})

const withStore = connect(
    mapStateToProps,

)

export default withStore(MyForm);