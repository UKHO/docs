# Tagging

[Back to main Readme](README.md)

Applied policies require the following tags on resources:

* SERVICE
* ENVIRONMENT
* COST_CENTRE
* SERVICE_OWNER
* RESPONSIBLE_TEAM
* CALLOUT_TEAM

Possible to use terraform `ignore_changes = [tags]` in which case tags will be inherited from resource hierarchy.

Should tags be deleted they will reapply with values from resource hierarchy.

Tag values can be changed and retained.

Tags should be kept current.

[Back to main Readme](README.md)
