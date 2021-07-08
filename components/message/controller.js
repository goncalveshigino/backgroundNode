

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

        console.log(fullMessage);
        revolve(fullMessage);
    });
}


module.exports = {

    addMessage,
}