import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {
  renderList (){
    return this.props.books.map((book) => {
    return(
        <li
        onClick ={() => this.props.selectBook(book)}
        key={book.title} className="list-group-item">{book.title}
        </li>
      )
    });
  }
  render () {
    return(
    <ul className ="list-group col-sm-4">
      {this.renderList()}
    </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever gets returned from here will show up as props inside book-list
  return {
    books: state.books
  }
}
//Anything returned from this function will return as props on the
//book list container
function mapDispatchToProps(dispatch){
//Whenever selectBook is called the result should be passed
//To all of our reducers

  return bindActionCreators ({ selectBook: selectBook }, dispatch)
}

//Promote BookList from a component to a container  - It needs to know
// about the new Dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
