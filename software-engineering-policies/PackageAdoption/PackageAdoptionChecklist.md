# Package Adoption Checklist

## Prompts

### Project

- Does the package already have a dedicated Azure DevOps project?
- Does the size and/or significance of the package justify a dedicated project?

### Pipeline

- Does a pipeline exist?
- Is it in Azure DevOps?
- Does it include Static Application Security Testing (SAST)?
- Does it include dependency checking?

### Documentation

- Does the documentation accurately reflect the state of the package?

### Code

- Is the code base in a language that the support team is familiar with?
- Is the code at a version support by the language provider e.g. LTS for .NET?
- Does logging meet the logging policy requirements?
- Is adequate testing in place?

### Backlog

- Does a backlog exist?
- Is it managed in Azure DevOps, either directly or via automated synchronisation?

## Identified Tasks

| Initial Adoption |
| ---------------- |
| *Example: Create Azure DevOps project* |
| *Example: Set up SAST in pipeline* |

| Ongoing Maintenance |
| ------------------- |
| *Example: Monitor the language provider versioning and upgrade the package appropriately* |
| *Example: Be alerted to vulnerable dependencies* |
| *Example: Maintain a changelog for consuming teams* |
