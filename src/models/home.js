export default {
    namespace: 'home',
    state: {
        list: [],
        count: 0,
    },
    effects: {
        addCount(payload) {
            return {
                count: this.count + payload
            };
        },
        async fetchList() {
            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        list: [{ name: 'a' }],
                    });
                }, 2000);
            });
            return result;
        }
    }
};
