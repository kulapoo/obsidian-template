

async function assignNoteLocation(tp) {
  try {
    const { templateDestinations } = tp.user.constants()
    const templateName = tp.config.template_file.basename;

    const currentFile = tp.config.target_file
    const folderPath = templateDestinations[templateName] || templateDestinations.other;
    const newFile = `/${folderPath}/${currentFile.basename}`;


    console.log('Assigning note to ', newFile, currentFile)
    if (await tp.file.exists(newFile)) {
      throw new Error('File already exists');
      return
    }
    await tp.file.move(newFile, currentFile);
    // add delay as obsidian doesn't seem to like moving files too quickly
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (ex) {
    console.log('Error assigning note location', ex)
  }

}

async function configureTitle(tp) {
  let title = tp.file.title;

  if (!title.startsWith('Untitled')) {
    return title
	}


  const templateName = tp.config.template_file.basename;
  const { dateFormats, globalVarsKeys, templates, noteLocations } = tp.user.constants()

  if (templateName === templates.people) {
    return title
  }

  let dateNowVal = tp.date.now(dateFormats.titleDateFormat)
  console.log(templateName, "templateName")
  let newTitle = ""

  if (templateName === templates.daily) {
    newTitle = `${tp.date.now(dateFormats.dateFormat)}`
    title = `${dateNowVal}`

    if (templateName === templates.daily && !!(await tp.file.exists(`/${noteLocations.inbox}/${newTitle}.md`))) {
      alert('A daily note with this title already exists')
      title = await tp.system.prompt('Enter a title for this note');
      newTitle = `${title || templateName} - ${dateNowVal}`
    }
  } else {
    title = await tp.system.prompt('Enter a title for this note');
    newTitle = title

    if (String(title || '').trim() === '') {
      newTitle = `no-title ${templateName} - ${dateNowVal}`
    }
  }

  await tp.file.rename(newTitle);
  tp.user.globalVars(globalVarsKeys.titleInput, title)
  tp.user.globalVars(globalVarsKeys.title, newTitle)
  return title
}

async function initialize(tp) {
  console.log('initializing...')
  await configureTitle(tp)
  await assignNoteLocation(tp)
  return ''

}

module.exports = initialize