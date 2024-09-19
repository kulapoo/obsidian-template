---
aliases:
  - People MOC
created: 2023-09-09
isoCreated: 2023-09-09T01:35:59.078+08:00
modified: 
tags:
  - map
---
up: [[00_Home MOC]]

# Family

```dataview
list 
from "people"
where contains(tags, "family")
```


# Friends

```dataview
list
from "people"
where contains(relationship, "friend") and !contains(relationship, "best-friend")
```

# Work Related

# Summary

# Related




<br />
<br />










