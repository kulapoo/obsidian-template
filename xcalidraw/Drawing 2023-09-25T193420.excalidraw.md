---
aliases: 
- 
created: <% tp.date.now() %>
isoCreated: <% tp.date.now("YYYY-MM-DDTHH:mm:ss.SSSZ")%>
ordinal: 0
tags:
- input
- drawing
- 
---
up: [[01_Inbox MOC|Inbox MOC]]


<%*
  const title = await tp.system.prompt("Title of the drawing?", "x");
  const foldername = "/xcalidraw"
  const transcludePath = `${foldername}/${title}.excalidraw`
  await tp.file.rename(title);

  const ea = ExcalidrawAutomate;
  ea.reset();


  await ea.create({
    filename : title,
    foldername : foldername,
    //templatePath: 'Excalidraw/Template.excalidraw', //uncomment if you want to use a template
    onNewPane : true
  });

  tp.frontmatter.aliases = title;
  
  tR += '![['+transcludePath+'|640x480]]';
%>
