# Branch Protection

Branch protection on active repositories is important to ensure that we are doing the best we can to be clean and secure. The policies set out below are required for your main branch but options for other branches.

The following options should be selected. An explanation is provided where necessary as to why this should be enabled.

## Branch Policies

The following policies should be enabled against a repository to ensure that we are adhering to our source control policies and being as vigilant as possible when it comes to code reviews prior to committing our code to main.

### Require a minimum number of reviewers

The team size will dictate the number of approvals required to move a pull request through the process but the ideal here should be 2. This allows for multiple views of the code from different angles to make sure what you are trying to merge fits what is required. However it is understood sometimes team sizes are not large enough for this so an absolute minimum would be 1 reviewer.

#### Prohibit the most recent pusher from approving their own changes

Ideally anybody who is contributing to the pull request should be getting an external review so enabling this will help us prevent developers making "small fixes" before approving and merging.

#### When new changes are pushed: Reset all code reviewer votes (does not reset votes to reject or wait)

Any new change indicates that the pull request needs a review from all people. However if there has been a request to reject or wait there should be a chance for these individuals to double check their concerns have been addressed before approving.

### Check for linked work items: Optional

Whilst it would be ideal to have a work item attached to each pull request, there will be times where a work item cannot be attached for one reason or another. Having the warning will allow us to think about if we should have the work item when creating the pull request.

### Check for comment resolution: Required

Having this set to required allows anybody who has commented to ensure that their comment has been seen and/or dealt with before a pull request has been actioned. If there are problems later in the development process then the pull request can be referenced back to and there should be no loose conversations.

### Limit merge types

The preference here is to use Squash merge so that we can have a linear history and allow for multiple commits (including any errors) in a pull request without it reflecting in the main branch. However this is a team choice and the above is guidance only.

## Build Validation

To ensure that what is being put into main meets expectation we should be putting build validation gates in place. Wherever there is automation to test the codebase or code changes (such as Snyk or Trivvy) then we should be adding these pipelines as a policy. This should trigger automatically whenever a change is made and should expire whenever the main branch is updated.

## Status Checks

Status checks are the automated checks that run on the code to support in quality and security. Requiring these is a must but it is not enough to just turn this on, you need to be explicit in which checks you want requiring.

### Automatically Included reviewers

The code owners should be the gate keepers of the repository and no code should pass this point without their knowledge or approval. It is the code owners who have the knowledge of the code and its purpose that can help guide a PR so having this is extra important. 
