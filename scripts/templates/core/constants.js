const dateFormats = {
  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'HH:mm:ss',
  titleDateFormat: 'YYYYMMDDHHmmssS',
  isoFormat: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
}

const noteLocations = {
  notes: 'notes',
  people: 'people'
}

const templates = {
  daily: 'daily',
  meeting: 'meeting',
  other: 'other',
  people: 'people',
  later: 'later'
}

const globalVarsKeys = {
  title: 'title',
  titleInput: 'titleInput',
  dateFormats: 'dateFormats',
}

const templateDestinations = {
  [templates.daily]: noteLocations.notes,
  [templates.meeting]: noteLocations.notes,
  [templates.people]: noteLocations.people,
  [templates.other]: noteLocations.notes,
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