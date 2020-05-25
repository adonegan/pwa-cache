# Cache API

This is a tutorial from Udemy's Learn to Build Progressive Web Apps using JavaScript course. Summary of video tutorial:

1. Defined files I want to cache

2. Defined the cache name

3. Listened for the install event, then added all files into the cache

4. Then added the fetch event, a file is requested - the cache-first strategy is utilised here

5. Then, check if files exist in network, if not, display 404 page, display offline page as specified

6. Listened for activate event for new service worker, delete previous cache and store new cache
