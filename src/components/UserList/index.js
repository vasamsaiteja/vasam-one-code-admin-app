import {Component} from 'react'

import UserDetails from '../UserDetails'
import Pagination from '../Pagination'
import './index.css'

class UserList extends Component {
  state = {
    isChecked: false,
  }
  handleCheck = e => {
    const isChecked = e.target.checked
    this.setState({isChecked: isChecked})
  }

  render() {
    const {
      userData,
      searchInput,
      deleteUser,
      selectUser,
      usersPerPage,
      totalUsers,
      paginate,
      checkedUser,
      selectedUserData,
      deleteCheckedUser,
      handleEdit,
      selectedAllUser,
    } = this.props
    const {isChecked} = this.state
    const searchResults = userData.filter(eachDetail =>
      eachDetail.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const handleSelectedAllUser = e => {
      const isAllChecked = e.target.checked
      this.setState({isChecked: isAllChecked})
      console.log(e.target.checked)
      selectedAllUser(e.target.checked)
    }
    return (
      <>
        <div className="user-information-container">
          <div className="details-container">
            <h1
              style={{width: '10%', marginBottom: '0px'}}
              className="d-flex justify-content-center align-items-center "
            >
              <input
                type="checkbox"
                className="input-checkbox"
                checked={isChecked}
                onClick={handleSelectedAllUser}
                onChange={this.handleCheck}
              />
            </h1>

            <h1 style={{width: '20%'}} className="name-heading text-highlight">
              Name
            </h1>
            <h1 style={{width: '30%'}} className="email-heading text-highlight">
              Email
            </h1>
            <h1 style={{width: '10%'}} className="role-heading text-highlight">
              Role
            </h1>
            <h1 style={{width: '25%'}} className="role-heading text-highlight">
              Actions
            </h1>
          </div>
          <hr />

          {searchResults.map(eachUser => (
            <UserDetails
              eachUser={eachUser}
              key={eachUser.id}
              deleteUser={deleteUser}
              selectUser={selectUser}
              checkedUser={checkedUser}
              handleEdit={handleEdit}
            />
          ))}
        </div>

        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={totalUsers}
          paginate={paginate}
          selectedUserData={selectedUserData}
          deleteCheckedUser={deleteCheckedUser}
        />
      </>
    )
  }
}

export default UserList
