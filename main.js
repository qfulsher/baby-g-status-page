import * as LDClient from 'launchdarkly-js-client-sdk';

let client;

const updateStatus = (status) => {    
    document.querySelector('#loading').style.display = 'none';

    const fullscreens = document.querySelectorAll('.full-screen');
    fullscreens.forEach(f => f.style.visibility = 'hidden');
    document.getElementById(status).style.visibility = 'visible'
}

window.addEventListener("load", () => {
    client = LDClient.initialize('668b8078486b2f0f472de607', { anonymous: true });
    client.on("ready", () => {
        const initialStatus = client.variation("baby-g-status", "waiting");
        updateStatus(initialStatus)
        
        client.on("change", (setting) => {
            const status = setting["baby-g-status"];
            if (status) {
                updateStatus(status.current);
            }
        });
    });
});
