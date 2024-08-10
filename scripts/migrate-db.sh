#!/bin/bash

# Execute MongoDB commands inside the mas-mongo container
docker exec -i mas-mongo mongosh <<EOF
use mas-trad

db.createUser({
  user: "lcleris",
  pwd: "aze123",
  roles: [{ role: "readWrite", db: "mas-trad" }]
})

if (db.getCollectionNames().indexOf('users') === -1) {
  db.createCollection('users')
}

if (db.getCollectionNames().indexOf('traductions') === -1) {
  db.createCollection('traductions')
}

EOF
