# Branch Protection

Branch protection on active repositories is important to ensure that we are doing the best we can to be clean and secure. The policies set out below are required for your main branch but options for other branches.

The following options should be selected. An explanation is provided where necessary as to why this should be enabled.

## Require a pull request before merging

We should never be making any code changes to the main branch without making a pull request. This can lead to a messy history, conflicts and broken builds that can cause outages. By performing a pull request, your code can be put through quality checks, code review and even be run in an environment before being merged.

### Require approvals

The team size will dictate the number of approvals required to move a pull request through the process but the ideal here should be 2. This allows for multiple views of the code from different angles to make sure what you are trying to merge fits what is required. However it is understood sometimes team sizes are not large enough for this so an absolute minimum would be 1 reviewer.

### Dismiss stale pull request approvals when new commits are pushed

If a code change is made, no matter how tiny, it is best that your reviewers take another look just to be sure that everything is ok. It may seem overkill for something like a line deletion or missing semicolon however it stops code creep and ensures you are proofing your code prior to reviews in the future.

### Require reviews from Code Owners

The code owners should be the gate keepers of the repository and no code should pass this point without their knowledge or approval. It is the code owners who have the knowledge of the code and its purpose that can help guide a PR so having this is extra important.


## Require status checks to pass before merging

Status checks are the automated checks that run on the code to support in quality and security. Requiring these is a must but it is not enough to just turn this on, you need to be explicit in which checks you want requiring.

### Require branches to be up to date before merging

It is pointless running checks and doing code reviews on code that is not inline with your main branch. It could be that your code is fine however there has been a change made that conflicts with yours that would not be found until merging. This check allows us to prevent this from happening.

### Snyk SAST status check to be required

Snyk has been setup against all Repos. This means when you enable status checks to be required and you search for the status checks you want to enable, typing `snyk` into the text box provided should hopefully show `snyk/sast` and you can select it. It is important that we have this as a required check as we do not want to push insecure code into main. 

## Require conversation resolution before merging

If there are conversations on your pull request then it is important to know that these have been acknowledged in one way or another. Sometimes a passing comment can go unnoticed but could have an effect on something down the line. By dealing with it at the pull request we can be sure that the conversation is atleast taken into consideration.

## Do not allow bypassing the above settings

The point of these settings is to ensure we deliver safe and secure code where possible. By allowing anyone to bypass this would defeat the object of what we are trying to achieve. Whilst a nusiance, they provide a level of automated checks to help with the continued delivery of our code, so problems should be dealt with at the various levels and not bypassed. There will always be unique cases where this cannot be done but that must be dealt with on a case by case basis.

## Restrict who can push to matching branches

As we work with 3rd parties and multiple teams, sometimes having codeowners reviewing is not enough and we need to actually restrict who is pushing to the branch. For main it should be the service owners and any other teams who are maintaining the service. 
