import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { newNote, getAllNotes, findNotes, removeNote, removeAllNotes } from './notes.js'
import { start } from './server.js'

const listNotes = (notes)=>{
    notes.forEach(note => {
        console.log("\n");
        console.log("id:", note.id);
        console.log("tags:", note.tags.join(","));
        console.log("content:", note.content);
    })
}

yargs(hideBin(process.argv))
  .command('new <note>', 'create a new note', yargs => {
    return yargs.positional('note', {
      describe: 'The content of the note to create',
      type: 'string'
    })
  }, async (argv) => {
     const tags = argv.tags ? argv.tags.split(',') : [];
     const note = argv.note;
     const res = await newNote(note, tags);
     console.log(`Note Added!`, res.id )
  })
  .option('tags',{
    alias: 't',
    type: 'string',
    description: 'Add tags to the note'
  })
   .command('all', 'get all notes', () => {}, async (argv) => {
    const notes = await getAllNotes();
    listNotes(notes);
  })
  .command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
    const notes = await findNotes(argv.filter);
    listNotes(notes);
  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
    const id = argv.id;
    const removedId = await removeNote(id);
    if (removedId) 
        console.log(`Note with id ${removedId} removed!`);
    else 
      console.log(`Note with id ${id} not found!`);
    
  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {
    const  notes = await getAllNotes();
    start(notes, argv.port);
    
  })
  .command('clean', 'remove all notes', () => {}, async (argv) => {
    await removeAllNotes();
    console.log('All notes removed!');
  })
  .demandCommand(1)
  .parse()