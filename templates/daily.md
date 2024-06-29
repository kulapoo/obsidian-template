---
<%*
let dateFormat = tp.user.constants().dateFormats.dateFormat
const title = tp.date.now(dateFormat)
try {
  await tp.file.rename(title);
} catch (ex) {
  alert(ex.message);
  throw Error(ex.message);
}

-%>
<% tp.file.include(tp.file.find_tfile('/templates/macros/z_init')) %>
tags:
- log/journal
---
up: [[07_Journal MOC|Journal MOC]]

<% tp.file.cursor() %>

# Tasks
## Over due
```dataview
table
file.cday as "Created date", filter(tags, (x) => startswith(x,"status/")) as "Status", ordinal as "Priority"
from #status/overdue
sort ordinal desc, file.ctime desc
limit 5
```
## Due Today
```dataview
table
file.cday as "Created date", filter(tags, (x) => startswith(x,"status/")) as "Status", ordinal as "Priority"
from #status/todo
where !icontains(tags, "status/todo/daily") AND !icontains(tags, "status/overdue")
sort ordinal desc, file.ctime desc
limit 10
```

# Daily Habits

<% tp.file.include(tp.file.find_tfile('/templates/macros/z_daily_task_start')) %>
<% tp.file.include(tp.file.find_tfile('/templates/macros/z_daily_task_end')) %>


# Later - [[01_Inbox MOC#Someday maybe|See all]]

```dataview
table
ordinal as "Priority", file.cday as "Created date"
from ("someday maybe" or #status/backlog)
sort ordinal desc, file.ctime desc
limit 6
```


<br />
<br />



# <% tp.date.now(dateFormat) %>

Prev: [[<%  tp.date.now(`${dateFormat}`, -1) %>]] | Next: [[<%  tp.date.now(`${dateFormat}`, 1) %>]]
