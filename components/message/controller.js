const store = require('./store')

function addMessage(user, message) {

    return new Promise((revolve, reject) => {
        
        if (!user || !message) {
            console.error('[messageController] Nap ha usuario nem mensagem')
            reject('Dados incorretos');
            return false;
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }

        store.add(fullMessage);

        revolve(fullMessage);
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
     })
 }


module.exports = {

    addMessage,
    getMessages
}