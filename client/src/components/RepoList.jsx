import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Top {props.repos.length} Repos </h4>
      <table>
      	<tbody>
	      	<tr>
            <th>username</th>
            <th>repo_name</th>
	        	<th>html_url</th>
            <th>stars</th>
	        </tr>
        	{props.repos.map(repo => <RepoListEntry repo={repo}/>)}
        </tbody>
      </table>
  </div>
)

export default RepoList;