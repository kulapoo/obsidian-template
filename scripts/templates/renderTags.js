function renderTags(frontmatter = {}) {
  console.log('renderTags', frontmatter)
  return (frontmatter?.tags || '').split(',').map(tag => `#${tag}`).join(' ');
}

module.exports = renderTags;