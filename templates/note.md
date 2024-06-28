---
<%*
let dateFormat = tp.user.constants().dateFormats.dateFormat
let title = await tp.system.prompt("Title")
title = String(title).trim() || "Untitled-" + tp.date.now(dateFormat)
await tp.file.rename(title);
%>
<% tp.file.include(tp.file.find_tfile('/templates/macros/z_init')) %>
tags: 
- input

---
up: [[01_Inbox MOC|Inbox MOC]]

# General

<% tp.file.cursor() %>




# Related


<br />
<br />







