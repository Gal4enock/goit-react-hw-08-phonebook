const isAuthentificated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

export default {isAuthentificated, getUserName}