<% await tp.user.initialize(tp) -%>
aliases: 
- <% tp.user.globalVars("titleInput")() || "" %>
created: <% tp.date.now(tp.user.constants().dateFormats.dateFormat) %>
isoCreated: <% tp.date.now(tp.user.constants().dateFormats.isoFormat) %>
ordinal: 0