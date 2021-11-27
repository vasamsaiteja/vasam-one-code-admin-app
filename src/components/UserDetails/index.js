import {Component} from 'react'

import './index.css'

class UserDetails extends Component {
  state = {
    isEdit: false,
    name: '',
    email: '',
    role: '',
    isChecked: false,
  }

  onUserDetails = () => {
    const {eachUser, deleteUser} = this.props
    const {email, name, role, id} = eachUser

    const onDelete = () => {
      deleteUser(id)
    }
    return (
      <>
        <h1
          style={{width: '10%', marginBottom: '0px'}}
          className="d-flex justify-content-center align-items-center"
        >
          <input
            type="checkbox"
            className="input-checkbox"
            checked={this.state.isChecked}
            onClick={this.onSelectUserData}
            onChange={this.handleCheck}
          />
        </h1>

        <h1
          style={{width: '20%', fontWeight: 'normal'}}
          className="name-heading"
        >
          {name}
        </h1>
        <h1
          style={{width: '30%', fontWeight: 'normal'}}
          className="email-heading"
        >
          {email}
        </h1>
        <h1
          style={{width: '15%', fontWeight: 'normal'}}
          className="role-heading"
        >
          {role}
        </h1>
        <h1 style={{width: '20%', fontWeight: 'normal'}}>
          <button type="button" onClick={this.onEdit}>
            <i className="far fa-edit edit-icon"></i>
          </button>
          <button type="button" onClick={onDelete}>
            <i className="far fa-trash-alt trash-icon"></i>
          </button>
        </h1>
      </>
    )
  }

  updateName = event => {
    this.setState({name: event.target.value})
    // console.log(event.target.value)
  }

  updateEmail = event => {
    this.setState({email: event.target.value})
    // console.log(event.target.value)
  }

  updateRole = event => {
    this.setState({role: event.target.value})
  }

  onSelectedUser = () => {
    const {selectUser} = this.props
    this.setState({
      name: selectUser.name,
      email: selectUser.email,
      role: selectUser.role,
    })
  }

  onEditUser = () => {
    const {eachUser} = this.props
    this.setState({
      name: eachUser.name,
      email: eachUser.email,
      role: eachUser.role,
    })
  }

  onEdit = () => {
    this.onEditUser()
    this.setState(prevState => ({isEdit: !prevState.isEdit}))
  }

  handleCheck = e => {
    const isChecked = e.target.checked
    this.setState({isChecked: isChecked})
  }
  onSelectUserData = () => {
    // console.log('onSelectUserData', eachUser)
    const {eachUser, checkedUser} = this.props
    const {isChecked} = this.state

    const {id} = eachUser
    console.log('in function', isChecked)
    if (!isChecked) {
      checkedUser(id)
    }
  }
  handleSubmit = e => {
    const {name, email, role} = this.state

    e.preventDefault()
    this.props.handleEdit(this.props.eachUser.id, name, email, role)
    this.setState({isEdit: false})
  }
  render() {
    const {name, email, role, isChecked} = this.state
    const {isEdit} = this.state

    console.log('in render', isChecked)

    return (
      <>
        <div className="details-container">
          {isEdit ? (
            <form className="form-container" onSubmit={this.handleSubmit}>
              <input type="text" value={name} onChange={this.updateName} />
              <input type="text" value={email} onChange={this.updateEmail} />
              <input type="text" value={role} onChange={this.updateRole} />
              <input type="submit" value="Update" className="btn btn-primary" />
            </form>
          ) : (
            this.onUserDetails()
          )}
        </div>
        <hr />
      </>
    )
  }
}

export default UserDetails
