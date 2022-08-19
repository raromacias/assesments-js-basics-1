/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "A version control system used for tracking changes in code projects. Git prevents bugs and loss of progress by providing snapshots of a code project throughout its history.  The basic unit of git is a code project aka repository which is contained in a single folder."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "A code hosting platform for git or version control and collaboration. It lets you and others work together on projects from anywhere."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "Initializes and creates a local Git repository in the current folder. Usually the first command you'll run in a new project."
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "Creates a copy of a specific repository or branch within a repository. It points to an existing repo and makes a copy of that repo in a new directory at another location."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "Tells me about this repo. It shows the currrent state of your Git working directory and staging area."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "Adds a change in the working directory to the staging area. It lets Git know that you want to include changes to a particular file in the next commit"

let gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "Creates a snapshot of the files I'm tracking."

let gitCommitCode = "git commit -m `initial commit`"


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "Uploads local repository to a remote repository."


console.log(gitDefinition)
console.log(gitHubDefinition)
console.log(gitInitDefinition)
console.log(gitCloneDefinition)
console.log(gitStatusDefinition)
console.log(gitAddDefinition)
console.log(gitAddCode)
console.log(gitCommitDefinition)
console.log(gitCommitCode)
console.log(gitPushDefinition)