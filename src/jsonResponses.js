
const users = {};

const respond = (request, response, status, object) => {
    const content = JSON.stringify(object);
    response.writeHead(status, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(content, 'utf8'),
    });

    if (request.method !== 'HEAD' && status !== 204) {
        response.write(content);
    }

    response.end();
};

//getUsers
const getUsers = (request, response) => {

}

//notReal
const notReal = (request, response) => {

}

//addUser
const addUser = (request, response) => {
    
}