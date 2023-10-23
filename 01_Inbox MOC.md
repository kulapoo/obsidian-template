---
alias: Inbox MOC
created: 2023-09-05
isoCreated: 2023-09-05T13:06:29.511+08:00
modified: 
tags: 
- map
---
up: [[00_Home MOC]]


# Fleeting 

```dataview
table without id
file.link as "Title",
file.etags as "Tags",

ordinal as "Priority", file.ctime as "Created date"
from #input
where !contains(tags, "status/backlog")
sort ordinal desc, file.ctime desc 
```


# All

```dataview
table created
from #input

sort file.ctime desc
limit 10
```


# Backlog

```dataview
table created
from #input
where contains(tags, "status/backlog")
sort created desc
```

# Someday maybe

```dataview
table created
from "someday maybe"
sort file.ctime desc
```

# Summary

This where to put fleeting / Input notes that need to be processed. It
may contain thoughts I've written down, something a friend has
recommended I look up, or highlights from my reading. Processing
the contents of the inbox will be a regular ritual in managing your
Zettelkasten


# Related
- [[Fleeting Note]]