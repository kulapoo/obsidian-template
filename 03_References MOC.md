---
aliases:
- References MOC
created: 2023-09-10
isoCreated: 2023-09-10T07:10:01.512+08:00
ordinal: 0
tags:
- map
---
up: [[00_Home MOC|Home MOC]]

# All References

```dataview
table without id
file.link as "Title",
file.etags as "Tags"
from "references" or #info/reference or #output/reference
where !contains(tags, "excalidraw")
sort file.ctime desc
limit 10
```

# My References

```dataview
table without id
file.link as "Title",
file.etags as "Tags"
from #info/reference
where !contains(tags, "excalidraw")
sort file.ctime desc
```

# From other sources

```dataview
table without id
file.link as "Title",
file.etags as "Tags"
from "references" and !#info/reference
where !contains(tags, "excalidraw")
sort file.ctime desc
```
# Excalidraw

```dataview
list
from #excalidraw
```


<br />
<br />



# Related






