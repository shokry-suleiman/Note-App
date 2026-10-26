# Note App

A small Node.js command-line app for creating, viewing, searching, and deleting notes. Notes are saved locally in `db.json`.

## Requirements

- Node.js
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

## Tests

Run the test suite with:

```bash
npm test
```

Run commands from the project directory with `node index.js`. To use the `note` command directly, link the package globally:

```bash
npm link
```

## Usage

Create a note:

```bash
node index.js new "Buy groceries"
```

Add comma-separated tags:

```bash
node index.js new "Buy groceries" --tags shopping,home
```

List all notes:

```bash
node index.js all
```

Search note content (case-insensitive):

```bash
node index.js find groceries
```

Remove a note by its ID, shown when the note is created or listed:

```bash
node index.js remove 1720000000000
```

Delete all notes:

```bash
node index.js clean
```

After running `npm link`, you can replace `node index.js` in these examples with `note`.

## Data storage

Notes are stored in the project-root `db.json` file:

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
