Task 5. Investigate Permutive loading time
--Donelle Hasell

1. How would you go about investigating the issue?

First I would doublecheck the publisher's Permutive Dashboard and verify the cohort and segment is setup for at least one pageview.
I would check the number of cohorts as well to see if certain users take longer due to how many cohorts they belong to. 
I would then doublecheck the code to make sure the pageview tracking event is correctly coded. While checking the code I would check
to make sure the Permutive initiation code is located in between the <head></head> tags of each page. I would then run tests using both
a normal browser session as well as an incognito browser session to verify if the correct ads are indeed showing up when I land on 
the page. I would retrieve all segments as I browse the site pages to check if my user has been added to the right cohorts. I would
try this on different browsers as well. I would also check to make sure tag managers aren't used.

2. What factors could cause Permutive to load more slowly than GAM ads?

The Permutive initiation code isn't located between the <head></head> tags. 
The publisher could be using a tag manager. 
Inconsistent network speeds. 
Incorrect syntax or Org ID.
The publisher has a lot of cohorts data


3. Are there things the publisher may be able to change with their website/deployment, to improve the situation?

Yes, the publisher can ensure the Permutive code is correct and placed between the <head></head> tags to ensure Permutive loads immediately. 
Ensure they aren't using a tag manager.
Streamline their list of cohorts

4. Are there things we may be able to change on our end, to make Permutive load faster?

Permutive is already the world's fastest data platform and is asynchronous, however we can find ways to shorten the amount of time it takes to compare user event data against the available
list of cohorts, especially for large numbers. We could probably also find more ways to cache the cohort data.