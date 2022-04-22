import { connect } from 'react-redux'
import { editName, editAddress } from '../redux/reducers/user.reducer'

function Form(props) {
  return (
    <div className="m-auto my-2 border max-w-3xl py-2">
      <h1 className='text-center mb-2'>User Form [Estado objeto]</h1>
      <div className='flex justify-around'>
        <div>
          <p>Name: {props.user.name}</p>
          <p>Email: {props.user.email}</p>
          <p>Address: {props.user.address.street} {props.user.address.number} ({props.user.address.code})</p>
        </div>
        <div>
          <input type="text" value={props.user.name} onChange={props.editName} className='block border' />
          <br />
          <input type="text" value={props.user.address.street} onChange={props.editAddress}  className='block border' />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    editName: (e)=> dispatch(editName(e.target.value)),
    editAddress: (e)=> dispatch(editAddress(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)