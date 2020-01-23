export function signInRequest(email, cnpj, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, cnpj, password },
    };
}

export function signInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    };
}

export function signUpRequest(name, email, cnpj, password) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { name, email, cnpj, password },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
