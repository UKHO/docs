# Hasura

THIS IS A PLACEHOLDER

## Location of Hasura

Hasura Portal can be found at:
[https://data.ukho.gov.uk/apis/metadata/console](https://data.ukho.gov.uk/apis/metadata/console) 

## Note when new tables/relationships are added

Please note that when you add new tables/relationships in Hasura that you need to ensure these are tracked!

If you don't, then you may have some head-scratching trying to work out why you can't see them.

In addition, please ensure that the hasura user has permissions to see the tables (we have attempted to add a default grant to address this, but it is just as well to check using psql and using \z <table-name> and ensure that the hasura user has the relevant permissions).

## Note when new columns are added to/removed from existing tables

Please ensure that you use the "Reload metadata" option under Settings in hasura (Gear icon in header) to cause columns to be re-scanned, otherwise you won't see the changes.
