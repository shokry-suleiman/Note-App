# Note App

A small Node.js command-line application for creating, listing, searching, and deleting notes.

## Features

- Add a new note with optional tags
- View all saved notes
- Search notes by content
- Remove a single note by ID
- Clear all notes
- Store notes in a local JSON database

## Project structure

- `index.js` – entry point for the CLI
- `src/command.js` – command parsing and CLI commands
- `src/notes.js` – note logic
- `src/db.js` – JSON database helpers
- `db.json` – persistent note storage

## Installation

```bash
npm install
```

If you want to run the CLI globally from your terminal, link the package:

```bash
npm link
```

## Usage

### Create a note

```bash
note new "Buy groceries" --tags shopping,home
```

### List all notes

```bash
note all
```

### Search notes

```bash
note find "groceries"
```

### Remove a note

```bash
note remove 1720000000000
```

### Remove all notes

```bash
note clean
```

## Notes storage

The app stores notes in `db.json` in the project root. The structure looks like this:

```json
{
  "notes": [
    {
      "id": 1720000000000,
      "content": "Buy groceries",
      "tags": ["shopping", "home"]
    }
  ]
}
```

## Run directly without linking

```bash
node index.js new "Write README"
```
