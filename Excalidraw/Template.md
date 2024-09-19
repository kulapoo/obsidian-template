---
<%*
  const PATH = app.plugins.plugins["templater-obsidian"].settings.templates_folder;
  if(tp.file.folder(true) === PATH) throw(new Error("Cannibalization"));

let title = await tp.system.prompt("Title")
if (!String(title).trim()) {
	throw new Error("Cannot be empty")
}
title = title + '.excalidraw'
await tp.file.rename(title);
%>
<% tp.file.include(tp.file.find_tfile('/templates/macros/z_init')) %>
tags: 
- input
- excalidraw
excalidraw-plugin: parsed
excalidraw-open-md: true
excalidraw-default-mode: "zen"
---
up: [[18_Drawing MOC]]

# General

# Excalidraw Data
## Text Elements
## Drawing
```json
{"type":"excalidraw","version":2,"source":"","elements":[],"appState":{}}
```

