
export function setUserName(data) {
    localStorage.setItem('username', data);
}

export function getUserName() {
    return localStorage.getItem('username');
}

export function setPassword(data) {
    localStorage.setItem('password', data);
}

export function getPassword() {
    return localStorage.getItem('password');
}

export function setSessionId(data) {
    localStorage.setItem('sessionId', data);
}

export function getSessionId() {
    return localStorage.getItem('sessionId');
}

export function setPhone(data) {
    localStorage.setItem('phoneNo', data);
}

export function getPhone() {
    return localStorage.getItem('phoneNo');
}