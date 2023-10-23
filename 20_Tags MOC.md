---
aliases: 
- Tags MOC
created: 2023-09-10
isoCreated: 2023-09-10T06:10:20.142+08:00
ordinal: 0
tags: 
- info/reference
- map
---
up: [[01_Inbox MOC|Inbox MOC]]

# Beta
- #output/article
- #output/doc
- #source/article
- #planting


# Official

```dataview
table WITHOUT ID ("#" + tags) as "link"
from "/"
flatten tags
where startswith(tags, "#-") = false
group by tags
```

<br />
<br />



# Related






