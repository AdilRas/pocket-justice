import requests as req
from bs4 import BeautifulSoup as BS

res = req.get('https://www.change.org/petitions')
src = res.content
soup = BS(src, 'lxml')
