export default {
    namespace: 'bar',
    state: {
        list: [],
    },
    effects: {
        async fetchList() {
            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        list: [{ name: 'b' }],
                    });
                }, 2000);
            });
            return result;
        }
    }
};
