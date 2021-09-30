export default {
    namespace: 'home',
    state: {
        list: [],
        count: 0,
    },
    effects: {
        addCount(payload, updateStore) {
            updateStore({
                count: this.count + payload
            });
        },
        async fetchList(_, updateStore) {
            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    const data = {
                        list: [{ name: 'home' }],
                    };
                    resolve(data);
                    updateStore(data);
                }, 2000);
            });
            return result;
        }
    }
};
