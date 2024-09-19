---
aliases:
  - Drawing MOC
created: 2023-09-10
isoCreated: 2023-09-10T21:07:36.180+08:00
ordinal: 0
tags:
  - map
---
up: [[00_Home MOC|Home MOC]]


# New

```dataviewjs
dv.table(["File Name"], 
	dv.pages()
	  .filter(p => p.file.tags.includes('#excalidraw'))
	  .sort((p) => p.file.ctime, "desc")
	  .map(p => [`[[${p.file.name}]]`])
);
```

# Related






