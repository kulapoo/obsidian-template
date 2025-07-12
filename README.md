

Yet Another Zettelkasten template, a tool crafted to simplify your note organization through the Zettelkasten method. Explore the [[00_Home MOC]] for detailed insights.

> **Note:** This template uses a **tag-based organization system**. All MOC (Map of Contents) files are optional and can be removed - the vault's structure is primarily controlled by #tags. MOCs provide convenient views but aren't required for organization.

# Setup Guide

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/obsidian-template.git my-notes` or download and extract the zip file to a folder named `my-notes`. You can rename `my-notes` to any name you prefer.
![Download Repository](./attachments/download-repo.png)
2. Open Obsidian app and create a new vault pointing to the `my-notes` folder. - Open folder as vault`
3. Go to [manage vault](https://help.obsidian.md/Files+and+folders/Manage+vaults)

![alt text](./attachments/open-vault.png)

4. This will automatically set up the necessary plugins and settings.
5. Restart or reload the Obsidian app to ensure all plugins are correctly installed and settings are applied.

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

Feel free to suggest improvements. Enjoy a seamless and efficient note-taking journey!