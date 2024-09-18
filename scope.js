/* Code blocks */

// Curly bracers {} are Code blocks, which creates SCOPE
// Parent scopes go into child scope -> Child scope will not ovveride parent scope
// Sibling scopes cannot interact, like a file system
// Parent (Global Scope), Child (Local Scope)
// Global variables can go into local scope, but local variables cannot enter global scope

const name = 'Jack'

{
    const otherName = 'Ashley'
    console.log("Local scope name:", otherName)
}


console.log("Global scope:", name)