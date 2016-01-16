Contribute to One Love
======================

### Git workflow

Fork this repo and create feature branch for every feature. When done, submit a pull request.

__Branch naming__

Branch name should reflect feature name. If using multiple words, use dash (`-`)
as delimiter. Also, include prefix `feature`, `bug`, `refactor` in branch name,
followed by slash (`/`).

_Correct:_

- `feature/feature-name`

_Incorrect:_

- `feature-name`
- `feature/feature_name`
- `feature/featureName`

__Commits:__

Commits should be atomic - the smaller they are, the better it gets.

__Commit messages:__

Start your commit message with capital letter and end with period (`.`).
First line should be commit description, no longer than 65 characters.
If you work on one of the issues, include issue number in your commit summary.
If what you have to say about the commit exceeds 65 characters, insert blank line
under summary and write the rest of the message, just make sure lines don't exceed
80 characters.

_Correct:_

    Adds awesome feature to supermodule #442.

or:

    Adds awesome feature to supermodule #442.

    The rest of the message can be as long as you want
    spanning across multiple lines.

__Merging pull requests:__

Make sure pull request passes all tests and always use Github's web interface
to do the merge.  If merge isn't possible, merge master branch into your local
feature branch, resolve any conflicts that might happen and commit the merge.
After that, use web interface to merge pull request. Always delete remote
feature branch after merge.

__IMPORTANT:__ Never push to master branch, even if your access rights permit that.

### Naming conventions

__Files:__

When naming files and directories, always use lowercase lettes and dash (`-`) as delimiter.

_Correct:_

- `file-name.ext`

_Incorrect:_

- `fileName.ext`
- `file_name.ext`


### Testing requirements

Test it, don't guess it. Cover all features you make with unit tests. If refactoring,
make sure tests pass, otherwise your pull request won't be accepted.

### Coding style

__Indentation:__

Use spaces for indentation, never tabs. Configure your editor to use soft tabs (or translate
tabs to spaces, as labeled in some editors). Set it to 2 spaces per tab.

We use eslint to check JavaScript. Our `.eslintrc` is based on airbnb's, with
slight changes. For more info, see [airbnb's es6 style
guide](https://github.com/airbnb/javascript) and [airbnb React
style guide](https://github.com/airbnb/javascript/tree/master/react)

### Resources

- [A note about commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html), by Tim Pope
- [Atomic commit](http://en.wikipedia.org/wiki/Atomic_commit) on Wikipedia
