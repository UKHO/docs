# Team Proteus
Team Proteus is a delivery team currently working on the Data Platform. The team was formerly known as Peppermint but has changed considerably since then to include members from the former Glaciermint team and elsewhere.

## Members
- Ildar Galikov - Lead Software Engineer
- Scott Drayton - Delivery Manager
- Chris Hall-Palmer - Solution Architect
- Carl Molyneux - DS&T Representative
- Antony Derham - Expert Software Engineer/Product Owner
- Sean Siford - Senior Software Engineer
- Alex Bush - Senior Software Engineer
- Benjamin Morgan - Software Engineer
- Andy Graham - Software Engineer
- Andy Pickin - Software Engineer
- Andy Cleveland - Test Engineer
- Chris Sutcliffe - DevOps Engineer

## Principles
Delivery efforts made by Team Proteus follow these principles.
- Use Continuous Delivery - Never build-up work to release
- Use Design System - All UI work should use components and patterns from the system
- Use Open Standards - Should be favoured over proprietary lock-in, at least for an interface
- Use PaaS/SaaS over IaaS/metal - Costs and scalability make these favourable
- Use cloud over on-prem - Government standard approach
- Use Slack for communications - More integrations, rest of gov uses

## Definition of Done
Our definition of done must be followed for all work delivered. Sections may only apply to some work.
### All Work
All acceptance criteria are met
All tasks are marked as done
The boundary of the VNet is not compromised
All knowledge transfer complete across team
Risks identified and added to RAID log
Tech Debt considered and added to Tech Debt log
Threat Modelling completed and captured
Cost was considered in implementation
### Software Dev
Code review complete
Related pull requests merged
Continuous integration pipeline written and passing
PR linked to Azure Board items
[POST-AB#6266] Appropriate tests written and passing
### Container Apps
[POST-AB#6335] Should have readiness probe
[POST-AB#6349] Should expose appropriate monitoring endpoints
[POST-AB#6267] Logging out to appropriate log service
App deployment written and deployed by Flux
### Migrations
[POST-AB#6266] Tests remain passing after migration
[POST-AB#6266] Tests re-written where appropriate
