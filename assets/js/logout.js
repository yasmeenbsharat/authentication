function logoutUser() {

    localStorage.removeItem("token");
    const broadcastChannel = new BroadcastChannel('logoutChannel');
    broadcastChannel.postMessage({ action: 'logout' });
    broadcastChannel.close();
    window.location.href = 'index.html';
}



