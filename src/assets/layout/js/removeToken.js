window.onbeforeunload = (ev) => {
    localStorage.removeItem("token");
};