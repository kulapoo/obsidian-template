<%* 

const id = tp.date.now("YYYYMMDDHHmmss") + Math.floor(Math.random() * 1000).toString().padStart(3, '0'); 

const title = await tp.system.prompt("Title of the drawing?", ''); 


await tp.file.rename(title); 

const folder = tp.file.folder(true); 

const drawingTitle = title + '.excalidraw';

const transcludePath = (folder == '/' ? '' : folder + '/') + drawingTitle; 
const createdAt = tp.date.now();
const noteLink = `"[[${title}]]"`;
const drawingLink =  `"[[${drawingTitle}]]"`;

-%>
---
id: <% id %>
aliases: <% title %>
description: 
created: <% createdAt %>
links: 
  - <% drawingLink %>
ordinal: 0
tags:
  - input
  - excalidraw/note
maps: "[[18_Drawing MOC]]"
---
# Go to Drawing

![[<% transcludePath %>]]

<%*
const ea = ExcalidrawAutomate;
ea.reset();
const isDarkTheme = document.body.classList.contains('theme-dark'); 
ea.setTheme(isDarkTheme ? 1 : 0);

await ea.create({
	filename : title,
	foldername : folder,
	
	frontmatterKeys: {
	  "aliases": drawingTitle,
	  "created": createdAt,
      "excalidraw-plugin": "parsed",
      "excalidraw-link-prefix": "",
      "excalidraw-link-brackets": true,
      "excalidraw-url-prefix": "🌐",
      "excalidraw-link-note": noteLink
    }

});

%>

# Excalidraw Data

## Text Elements
## Drawing
```json
{"type":"excalidraw","version":2,"source":"","elements":[],"appState":{}}
```






