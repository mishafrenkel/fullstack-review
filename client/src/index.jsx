// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import Search from './components/Search.jsx';
// import RepoList from './components/RepoList.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       repos: []
//     }

//   }

//   search (term) {
//     console.log(`${term} was searched`);
//     $.ajax({
//       url: 'http://localhost:1128/repos/import',
//       type: 'POST',
//       data: JSON.stringify({"username": `${term}`}), 
//       contentType: 'application/json',
//       success: (data) => {
//         console.log("Client-Server POST success!!!");
//       },
//       error: (request, error) => {
//         console.error('Request ' + JSON.stringify(request));
//       }
//     });
//   }

//   render () {
//     return (<div>
//       <h1>Github Fetcher</h1>
//       <RepoList repos={this.state.repos}/>
//       <Search onSearch={this.search.bind(this)}/>
//     </div>)
//   }
// }

// ReactDOM.render(<App />, 
//   document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'GET',
      success: data => { this.setState({repos: data}); },
      error: () => console.log('GET error!')
    });
  }

  search (term) {
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'POST',
      contentType: 'text/plain',
      data: term,
      success: () => { this.componentDidMount() },
      error: () => console.log('POST error!')
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));