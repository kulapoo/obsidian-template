---
<% tp.file.include(tp.file.find_tfile('/templater/macros/z_init')) %>
<%*
  const firstName = await tp.system.prompt("Enter first name")
  const lastName = await tp.system.prompt("Enter last name")
  const name = `${firstName} ${lastName}`;
  await tp.file.rename(name);
  const newfile = await tp.file.find_tfile(name);
  await tp.file.move(`/people/${name}`, newfile);

-%>
company:
location:
email:
mobileNumber:
tags: person
firstName: <% `${firstName}` %>
lastName: <% `${lastName}` %>
relationship:
birthDate:
---
up: [[09_People MOC|People MOC]]

# General

# Description

# Related


<br />
<br />
