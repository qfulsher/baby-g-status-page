# Baby Status Page
This repo is a website that allows you to keep people posted on the progress of your baby's delivery. Transitions are currently hooked up to the LaunchDarkly SDK which triggers the transitions between steps.

# Customizing
1. Clone and customize the website however you want.

# LaunchDarkly config
1. Replace the key with you LaunchDarkly mobile key for the flag you want. 
2. Update the custom values for the flag to match the values the website is expecting. 
3. For transitions, just move between the values in LaunchDarkly. The page should update without needing a browser refresh. 

# Deployment - Cloudflare
I used Cloudflare for hosting this, so that's what I'm writing up for. This site is so simple it should work with just about anything though. 
1. Buy a domain you want to use for the site.
2. Go to Cloudflare and open the Workers & Pages tab. Create a new page. 
3. Connect the app to your cloned git repo.
4. Set the branch to your main branch, don't select a framework preset, set build command to `npm run build`, set output directory to `dist`.
5. Hit save and deploy.
6. Make sure the project builds and deploys and that the preview websites work as expected. 
7. Under the `Custom Domains` tab for the page, setup a custom domain and point it to the domain you want to use.
8. After setting up the custom domain and waiting for the DNS changes to take affect, your site should be ready!