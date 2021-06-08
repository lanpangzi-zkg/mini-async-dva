export default {
    namespace: 'foo',
    state: {
        user: { name: 'zz' },
    },
    effects: {
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
