---
aliases:
  - Work MOC
created: 2023-09-10
isoCreated: 2023-09-10T06:07:36.180+08:00
ordinal: 0
tags:
  - map
---
up: [[00_Home MOC|Home MOC]]

# Certificates

```dataviewjs
dv.table(["File Name"], 
	dv.pages()
	  .filter(p => p.file.tags.includes('#certificate') && !p.file.tags.includes('#status/done'))
	  .sort((p) => p.file.ctime, "desc")
	  .map(p => [`[[${p.file.name}]]`])
);
```


# Idea

```dataviewjs
dv.table(["File Name"], 
	dv.pages()
	  .filter(p => p.file.tags.includes('#idea') && !p.file.tags.includes('#status/done'))
	  .sort((p) => p.file.ctime, "desc")
	  .map(p => [`[[${p.file.name}]]`])
);
```

# Done
```dataviewjs
dv.table(["File Name"], 
	dv.pages()
	  .filter(p => (p.file.tags.includes("#idea") || p.file.tags.includes("#certificate")) && p.file.tags.includes('#status/done'))
	  .sort((p) => p.file.ctime, "desc")
	  .map(p => [`[[${p.file.name}]]`])
);
```

<br />
<br />



# Related






