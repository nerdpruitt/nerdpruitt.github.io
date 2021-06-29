/**
 * Prints a greeting to the developer console in cheeky fashion
 * @see
 * http://patorjk.com/software/taag/#p=display&f=ANSI%20Regular&t=HELLO!
 */

const hello = `
-------------------------------------------


██   ██ ███████ ██      ██       ██████  ██ 
██   ██ ██      ██      ██      ██    ██ ██ 
███████ █████   ██      ██      ██    ██ ██ 
██   ██ ██      ██      ██      ██    ██    
██   ██ ███████ ███████ ███████  ██████  ██ 
                                            
                                        
-------------------------------------------

`;

const msg = `I guess you’re here to look around and see how things were built! Have fun and pour one out for “View Source”.

`

console.log(`%c${hello}%c${msg}`, 'color: #E13C38;', 'font-size: 16px; font-family: monospace;');
