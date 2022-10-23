# info-salad
A browser extension that uses a web scraper to estimate the carbon footprint of opening a website. 

DubHacks '22

Requirements to run:
* Python 3.10
* Flask
* Requests
* BeautifulSoup

Sources:
* CO2/kWh and CO2/mile: https://www.epa.gov/energygreenhouse-gases-equivalencies-calculator-calculations-and-references#miles
* kWh/byte: https://onlinelibrary.wiley.com/doi/full/10.1111/jiec.12630

Calculations are rough estimates based on a scrape of the webpage.
