---
aliases: 
- Event MOC
created: 2023-09-10
isoCreated: 2023-09-10T06:01:15.928+08:00
ordinal: 0
tags: 
- map
---
up: [[00_Home MOC]]

# General

```dataview
table without id
file.link as "Title",
file.etags as "Tags",
dateformat(startDate, "yyyy-MM-dd HH:mm") as "Start date",
dateformat(endDate, "yyyy-MM-dd HH:mm") as "End date"
from #log/event 
where endDate > date(now) OR contains(file.etags, "status/ongoing")
sort ordinal desc, file.ctime desc
```






# Past events

```dataview
table without id
file.link as "Title",
file.etags as "Tags",
startDate as "Start date",
endDate as "End date"
from #log/event 
where endDate < date(now) OR contains(file.etags, "status/ongoing")
sort ordinal desc, file.ctime desc
```
