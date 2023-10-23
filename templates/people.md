---
<% tp.file.include(tp.file.find_tfile('/templates/macros/z_init')) %>
<%* 
  const firstName = await tp.system.prompt("Enter first name")
  const lastName = await tp.system.prompt("Enter last name")

  await tp.file.rename(`${firstName} ${lastName}`)
-%>
company: 
location: 
email: 
mobileNumber: 
tags: person
firstName: <% `${firstName}` %>
lastName: <% `${lastName}` %>
relationship: <% tp.file.cursor() %>
birthDate:
---
up: [[09_People MOC|People MOC]]

# General

# Description

# Related


<br />
<br />
