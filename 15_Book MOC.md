---
aliases: 
- Book MOC
created: 2023-09-10
isoCreated: 2023-09-10T06:07:36.180+08:00
ordinal: 0
tags: 
- map
---
up: [[00_Home MOC|Home MOC]]

# To Download - Backlog

```dataviewjs
dv.table(["File Name"], 
	dv.pages()
	  .filter(p => p.file.tags.includes('#source/book') && p.file.tags.includes('#to-download'))
	  .sort((p) => p.file.ctime, "desc")
	  .map(p => [`[[${p.file.name}]]`])
);
```


# To Do

```dataviewjs
dv.table(["File Name"], 
	dv.pages()
	  .filter(p => p.file.tags.includes("#source/book") && !p.file.tags.includes("#read") && !p.file.tags.includes("#to-download"))
	  .sort((p) => p.file.ctime, "desc")
	  .map(p => [`[[${p.file.name}]]`])
);
```

# Done
```dataviewjs
dv.table(["File Name"], 
	dv.pages()
	  .filter(p => p.file.tags.includes("#source/book") && p.file.tags.includes("#read") && !p.file.tags.includes("#source/book/content"))
	  .sort((p) => p.file.ctime, "desc")
	  .map(p => [`[[${p.file.name}]]`])
);
```

<br />
<br />



# Related






