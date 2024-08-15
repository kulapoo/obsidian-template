---
alias: To Buy MOC
created: 2023-09-07
isoCreated: 2023-09-07T18:50:37.650+08:00
modified:
tags:
- map
---


# To Do

```dataview
list
from #buy
where icontains(tags, "status/todo")
sort file.ctime desc
limit 15
```

# Done

```dataview
list
from #buy
where icontains(tags, "status/done")
sort file.ctime desc
limit 20
```



# All

```dataview
list
from #buy
sort file.ctime desc
limit 50
```
<br />
<br />

up: [[00_Home MOC]]

# Related






