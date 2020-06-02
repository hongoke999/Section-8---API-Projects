class Github {
    constructor() {
        this.client_id = '1e3219daadb57556b088';
        this.client_secret = 'ec22d4c35419044dd0ae5b5dcd419dff82aef4c7';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}