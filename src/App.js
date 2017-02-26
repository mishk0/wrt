import React from 'react';
import styles from './App.css';

class App extends React.Component {
    render() {
        return (
            <div className={ styles.App }>
                Application
                <Field />
            </div>
        );
    }
}

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onChange(e) {
        this.setState({value: e.target.value});
        this.sendRequest();
    }

    sendRequest() {
        fetch(`https://api.github.com/users/${ this.state.value }/repos`).then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            })
    }

    render() {
        return (
            <input value={ this.state.value } onChange={ (e) => this.onChange(e) } type="text"/>
        )
    }
}

export default App;



//{
//    "id": 17873482,
//    "name": "android-numberpicker",
//    "full_name": "repotest/android-numberpicker",
//    "owner": {
//    "login": "repotest",
//        "id": 5213808,
//        "avatar_url": "https://avatars.githubusercontent.com/u/5213808?v=3",
//        "gravatar_id": "",
//        "url": "https://api.github.com/users/repotest",
//        "html_url": "https://github.com/repotest",
//        "followers_url": "https://api.github.com/users/repotest/followers",
//        "following_url": "https://api.github.com/users/repotest/following{/other_user}",
//        "gists_url": "https://api.github.com/users/repotest/gists{/gist_id}",
//        "starred_url": "https://api.github.com/users/repotest/starred{/owner}{/repo}",
//        "subscriptions_url": "https://api.github.com/users/repotest/subscriptions",
//        "organizations_url": "https://api.github.com/users/repotest/orgs",
//        "repos_url": "https://api.github.com/users/repotest/repos",
//        "events_url": "https://api.github.com/users/repotest/events{/privacy}",
//        "received_events_url": "https://api.github.com/users/repotest/received_events",
//        "type": "Organization",
//        "site_admin": false
//},
//    "private": false,
//    "html_url": "https://github.com/repotest/android-numberpicker",
//    "description": "A backport of the Android 4.2 NumberPicker",
//    "fork": true,
//    "url": "https://api.github.com/repos/repotest/android-numberpicker",
//    "forks_url": "https://api.github.com/repos/repotest/android-numberpicker/forks",
//    "keys_url": "https://api.github.com/repos/repotest/android-numberpicker/keys{/key_id}",
//    "collaborators_url": "https://api.github.com/repos/repotest/android-numberpicker/collaborators{/collaborator}",
//    "teams_url": "https://api.github.com/repos/repotest/android-numberpicker/teams",
//    "hooks_url": "https://api.github.com/repos/repotest/android-numberpicker/hooks",
//    "issue_events_url": "https://api.github.com/repos/repotest/android-numberpicker/issues/events{/number}",
//    "events_url": "https://api.github.com/repos/repotest/android-numberpicker/events",
//    "assignees_url": "https://api.github.com/repos/repotest/android-numberpicker/assignees{/user}",
//    "branches_url": "https://api.github.com/repos/repotest/android-numberpicker/branches{/branch}",
//    "tags_url": "https://api.github.com/repos/repotest/android-numberpicker/tags",
//    "blobs_url": "https://api.github.com/repos/repotest/android-numberpicker/git/blobs{/sha}",
//    "git_tags_url": "https://api.github.com/repos/repotest/android-numberpicker/git/tags{/sha}",
//    "git_refs_url": "https://api.github.com/repos/repotest/android-numberpicker/git/refs{/sha}",
//    "trees_url": "https://api.github.com/repos/repotest/android-numberpicker/git/trees{/sha}",
//    "statuses_url": "https://api.github.com/repos/repotest/android-numberpicker/statuses/{sha}",
//    "languages_url": "https://api.github.com/repos/repotest/android-numberpicker/languages",
//    "stargazers_url": "https://api.github.com/repos/repotest/android-numberpicker/stargazers",
//    "contributors_url": "https://api.github.com/repos/repotest/android-numberpicker/contributors",
//    "subscribers_url": "https://api.github.com/repos/repotest/android-numberpicker/subscribers",
//    "subscription_url": "https://api.github.com/repos/repotest/android-numberpicker/subscription",
//    "commits_url": "https://api.github.com/repos/repotest/android-numberpicker/commits{/sha}",
//    "git_commits_url": "https://api.github.com/repos/repotest/android-numberpicker/git/commits{/sha}",
//    "comments_url": "https://api.github.com/repos/repotest/android-numberpicker/comments{/number}",
//    "issue_comment_url": "https://api.github.com/repos/repotest/android-numberpicker/issues/comments{/number}",
//    "contents_url": "https://api.github.com/repos/repotest/android-numberpicker/contents/{+path}",
//    "compare_url": "https://api.github.com/repos/repotest/android-numberpicker/compare/{base}...{head}",
//    "merges_url": "https://api.github.com/repos/repotest/android-numberpicker/merges",
//    "archive_url": "https://api.github.com/repos/repotest/android-numberpicker/{archive_format}{/ref}",
//    "downloads_url": "https://api.github.com/repos/repotest/android-numberpicker/downloads",
//    "issues_url": "https://api.github.com/repos/repotest/android-numberpicker/issues{/number}",
//    "pulls_url": "https://api.github.com/repos/repotest/android-numberpicker/pulls{/number}",
//    "milestones_url": "https://api.github.com/repos/repotest/android-numberpicker/milestones{/number}",
//    "notifications_url": "https://api.github.com/repos/repotest/android-numberpicker/notifications{?since,all,participating}",
//    "labels_url": "https://api.github.com/repos/repotest/android-numberpicker/labels{/name}",
//    "releases_url": "https://api.github.com/repos/repotest/android-numberpicker/releases{/id}",
//    "deployments_url": "https://api.github.com/repos/repotest/android-numberpicker/deployments",
//    "created_at": "2014-03-18T16:39:39Z",
//    "updated_at": "2016-04-14T08:41:41Z",
//    "pushed_at": "2017-01-19T14:12:27Z",
//    "git_url": "git://github.com/repotest/android-numberpicker.git",
//    "ssh_url": "git@github.com:repotest/android-numberpicker.git",
//    "clone_url": "https://github.com/repotest/android-numberpicker.git",
//    "svn_url": "https://github.com/repotest/android-numberpicker",
//    "homepage": "https://developer.android.com/reference/android/widget/NumberPicker.html",
//    "size": 646,
//    "stargazers_count": 0,
//    "watchers_count": 0,
//    "language": "Java",
//    "has_issues": false,
//    "has_downloads": true,
//    "has_wiki": false,
//    "has_pages": false,
//    "forks_count": 0,
//    "mirror_url": null,
//    "open_issues_count": 0,
//    "forks": 0,
//    "open_issues": 0,
//    "watchers": 0,
//    "default_branch": "master"
//},
