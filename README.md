
# Obsidian Zettelkasten Template

[![GitHub stars](https://img.shields.io/github/stars/kulapoo/obsidian-template?style=social)](https://github.com/kulapoo/obsidian-template/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/kulapoo/obsidian-template?style=social)](https://github.com/kulapoo/obsidian-template/network/members)
[![License](https://img.shields.io/github/license/kulapoo/obsidian-template)](LICENSE)
[![Obsidian](https://img.shields.io/badge/Obsidian-7C3AED?logo=obsidian&logoColor=white)](https://obsidian.md)

A comprehensive **Zettelkasten template** for Obsidian, designed to simplify note organization and knowledge management. Perfect for researchers, students, writers, and knowledge workers who want a structured yet flexible note-taking system.

**🌟 Key Features:**
- **Flat, folder-free organization** - Uses tags instead of rigid folder hierarchies
- **Optional MOCs** - Maps of Content can be removed entirely
- **Rich templates** - Notes, journals, meetings, people, references, and visual content
- **Automated metadata** - Links, dates, and tags inserted automatically
- **Habit tracking** - Built-in daily habit monitoring
- **Visual support** - Excalidraw integration for drawings and diagrams

> **Note:** This template uses a **flat, folder-free organization system**. All MOC (Map of Contents) files are optional and can be removed - the vault's structure is primarily controlled by #tags rather than folders. MOCs provide convenient views but aren't required for organization.

Explore the [[00_Home MOC]] for detailed insights.

# Setup Guide

## Installation

**Option 1: Download ZIP (Recommended)**
- Click the green "Code" button → "Download ZIP"
- Extract to a folder (rename as desired, e.g., `my-zettelkasten`)

**Option 2: Git Clone**
```bash
git clone https://github.com/kulapoo/obsidian-template.git my-zettelkasten
```

**Next Steps:**
1. Open Obsidian app
2. Create new vault → "Open folder as vault" 
3. Select your extracted/cloned folder
4. The vault will auto-configure with plugins and settings
5. Restart Obsidian to ensure all plugins load correctly

![Download Repository](./attachments/download-repo.png)
![Open Vault](./attachments/open-vault.png)

## Manual Setup

If the above steps fail, follow these manual setup instructions to ensure proper configuration.

### Enable Community Plugins

1. Open Obsidian.
2. Navigate to `Settings > Community plugins > Browse`.
3. Enable community plugins if they are turned off (this is the default behavior).

![please check](./attachments/plugins.png)

### Install Required Plugins

1. Search for and install the following plugins:
  - [Dataview](https://obsidian.md/plugins?search=dataview)
  - [Templater](https://obsidian.md/plugins?id=templater-obsidian)
  - [Commander](https://obsidian.md/plugins?search=Commander) - This plugin allows you to swipe down from the top on a mobile device to display the "Create from template" option.
  - [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin) - sketch / drawing

### Setup Templater

1. Change the **Template folder location** to "templater/templates".
2. Change the **Script files folder location** to "scripts/templates".

![set default template folder](./attachments/setup-templater-folder.png)

![set default template scripts](./attachments/setup-templater-script-folder.png)

### Setup Default Created Notes Folder Destination

This should be automatically configured when you open the vault, but if it's not working:

1. Go to `Settings > Files and links > Default location for new notes`.
2. In the dropdown menu, select "In the folder specified below".
3. Set the "Folder to create new notes in" setting to **notes**.

> **Note:** This setting is pre-configured in the template, but verify it's set correctly if new notes aren't being created in the `notes` folder.

> You might want to check out the scripts under the `scripts` folder that contain constants for formatting dates and other similar purposes.

# Usage Guide

## Templates

Utilize the convenient shortcut `ctrl + N` on Windows or `cmd + N` on Mac to create a new note and choose from a variety of templates:

- **note** - Creates a note with #input tag
- **daily** - Daily journal template
- **event** - Event documentation
- **book** - Book template (for readers)
- **meeting** - Meeting notes
- **people** - People profiles
- **reference** - Creates a note with #info/reference tag
- **excalidraw** - For drawings, diagrams, and visual content

To learn more about using templates, please refer to the [Templater](https://silentvoid13.github.io/Templater/) documentation

> `/templater/macros/z_init.md` - This file is used in each template to insert metadata such as links, creation date, ordinal numbers, and tags.

> `/templater/macros/z_habit.md` - This file is used in each journal or daily template, recommended for tracking frequent habits or tasks you usually do, especially those that may change unexpectedly

## Journaling

For a structured daily journal, update templates under `/templater/macros/z_daily_task_start.md` and `/templater/macros/z_daily_task_end.md`.

## Habits

For daily habit tracking, use the `/templater/macros/z_habit.md` template. This template helps you monitor and maintain daily habits by providing a checklist section in your journal.

> **Note:** This template provides manual habit tracking through checklists - it doesn't automatically track habits.

# Customization

## Templates

Make your Zettelkasten uniquely yours by personalizing templates found in `templater/templates`. Tailor the system to match your distinctive style and preferences.

## Display

Most of the MOC files utilize the Dataview plugin. To customize them, please refer to the [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) documentation.

## Theme

You can customize the appearance of your Obsidian notes by using the [Style Settings](https://obsidian.md/plugins?search=Style%20settings) plugin or exploring other style settings options.

# Explore More

## Related Resources

- [[Zettelkasten study from Youtube]]
- [[Digital Zettelkasten- Principles, Methods, & Examples]]
- [Linking Your Thinking](https://www.linkingyourthinking.com/)

## Contributing

We welcome contributions! Please feel free to:
- **Star ⭐** this repository if you find it useful
- **Fork** and create pull requests for improvements
- **Report issues** or suggest new features
- **Share** with others who might benefit

## Community & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/kulapoo/obsidian-template/issues)
- **Discussions**: Share your setup and get help from the community

## Keywords
`obsidian` `zettelkasten` `note-taking` `pkm` `knowledge-management` `productivity` `second-brain` `templates` `markdown` `personal-knowledge` `research` `academic` `journaling`

---

Feel free to suggest improvements. Enjoy a seamless and efficient note-taking journey! 🚀