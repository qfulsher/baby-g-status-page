import * as LDClient from 'launchdarkly-js-client-sdk';

let client;

const updateStatus = (status) => {    
    document.querySelector('#loading').style.display = 'none';

    const fullscreens = document.querySelectorAll('.full-screen');
    fullscreens.forEach(f => f.style.visibility = 'hidden');
    document.getElementById(status).style.visibility = 'visible'
}

window.addEventListener('load', () => {
    client = LDClient.initialize('XXXXXXXXXXXXXXXXXXXXXXXX', { anonymous: true });
                                  
    client.on('ready', () => {
        const initialStatus = client.variation('xxxxxxxxxxxx', 'waiting');
        updateStatus(initialStatus)
        
        client.on('change', (setting) => {
            const status = setting['xxxxxxxxxxxx'];
            if (status) {
                updateStatus(status.current);
            }
        });
    });
});
