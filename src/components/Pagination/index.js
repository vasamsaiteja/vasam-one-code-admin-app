import {Component} from 'react'

import './index.css'

class Pagination extends Component {
  render() {
    const {
      usersPerPage,
      totalUsers,
      paginate,

      deleteCheckedUser,
    } = this.props
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      pageNumbers.push(i)
    }

    const onDeleteSelectedUsers = () => {
      deleteCheckedUser()
    }

    return (
      <div className="bottom-pagination-container ">
        <button
          style={{alignSelf: 'flex-start'}}
          className="delete-button mb-3"
          onClick={onDeleteSelectedUsers}
        >
          Delete Selected
        </button>
        <div className="card-pagination-container">
          <div className="panel-container ">
            <i className="fas fa-fast-backward panel-icons-1"></i>
            <i className="fas fa-step-backward panel-icons-2"></i>
          </div>

          <ul className="pagination-container-numbers ">
            {pageNumbers.map(number => (
              <li key={number} className="list-num">
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="pagination-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
          <div className="panel-container ">
            <i className="fas fa-fast-forward panel-icons-1"></i>
            <i className="fas fa-step-forward panel-icons-2"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Pagination
