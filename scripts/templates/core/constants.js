const dateFormats = {
  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'HH:mm:ss',
  titleDateFormat: 'YYYYMMDDHHmmssS',
  isoFormat: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
}

const noteLocations = {
  inbox: 'inbox',
  raw: 'raw',
  people: 'people',
  references: 'references',
}

const templates = {
  daily: 'daily',
  meeting: 'meeting',
  other: 'other',
  people: 'people',
  reference: 'reference',

}

const globalVarsKeys = {
  title: 'title',
  titleInput: 'titleInput',
  dateFormats: 'dateFormats',
}

const templateDestinations = {
  [templates.daily]: noteLocations.inbox,
  [templates.meeting]: noteLocations.inbox,
  [templates.people]: noteLocations.people,
  [templates.reference]: noteLocations.references,
  [templates.other]: noteLocations.inbox,
}

module.exports = function () {
  return {
    dateFormats,
    noteLocations,
    templateDestinations,
    globalVarsKeys,
    templates
  }
}