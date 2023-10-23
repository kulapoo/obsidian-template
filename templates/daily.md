---
<% tp.file.include(tp.file.find_tfile('/templates/macros/z_init')) %>
tags:
- log/journal
<%*
  let dateFormat = tp.user.constants().dateFormats.dateFormat
-%>
---
up: [[07_Journal MOC|Journal MOC]]

# Tasks
## Over due
<% tp.file.cursor() %>

## Due Today


# Daily Checklist

<% tp.file.include(tp.file.find_tfile('/templates/macros/z_daily_task_start')) %>
<% tp.file.include(tp.file.find_tfile('/templates/macros/z_daily_task_end')) %>

# Later



# Notes - Words  of Today

# Daily Quote

 <% tp.web.daily_quote() %>

<br />
<br />



# <% tp.date.now(dateFormat) %>

Prev: [[<%  tp.date.now(`${dateFormat}`, -1) %>]] | Next: [[<%  tp.date.now(`${dateFormat}`, 1) %>]]
