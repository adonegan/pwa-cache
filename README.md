# Cache API

This is a tutorial from Udemy's Learn to Build Progressive Web Apps using JavaScript course. Summary of video tutorial:

- Defined files I want to cache
- Defined the cache name
- Listened for the install event, then added all files into the cache
- Then added the fetch event, a file is requested - the cache-first strategy is utilised here
- Then, check if files exist in network, if not, display 404 page, display offline page as specified
- Listened for activate event for new service worker, delete previous cache and store new cache
- Use Google Lighthouse to check if pwa meets pwa standards and criteria
