import { insertDB, getDB,saveDB } from './db.js'

export const newNote = async (note,tags) => {
    const data = {
        id: Date.now(),
        content: note,
        tags: tags || []
    }
    await insertDB({id:data.id,content: note, tags: tags});
    return data
}

export const getAllNotes = async () => {
    const data = await getDB();
    return data.notes;
}

export const findNotes = async filter => {
    const db = await getDB();
    return db.notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()));
}

export const removeNote = async id => {
    const notes = await getAllNotes();
    const match = notes.find(note => note.id === id);

    if (match){
        const newNotes = notes.filter(note => note.id !== id);
        await saveDB({ notes: newNotes });
        return id
    }
}


export const removeAllNotes = async () => {
    await saveDB({ notes: [] });
}