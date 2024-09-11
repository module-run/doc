export default ({Vue, router}) => {
    router.beforeEach((to, from, next) => {
        if (typeof _hmt != "undefined") {
            if (to.path) {
                const path = `${to.fullPath}`
                _hmt.push(["_trackPageview", path]);
            }
        }
        next();
    });
};
