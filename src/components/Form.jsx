import { connect } from 'react-redux'
import { editName, editAddress } from '../redux/reducers/user.reducer'
import Section from './Section'

function Form(props) {
  return (
    <Section title='User Form' subtitle='Estado objeto'>
      <div className='flex justify-around'>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{props.user.name}</td>
              <td><input type="text" value={props.user.name} onChange={props.editName} className='block border' /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{props.user.email}</td>
              <td></td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{props.user.address.street}</td>
              <td><input type="text" value={props.user.address.street} onChange={props.editAddress} className='block border' /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editName: (e) => dispatch(editName(e.target.value)),
    editAddress: (e) => dispatch(editAddress(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)