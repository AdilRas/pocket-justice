import requests as req
from bs4 import BeautifulSoup as BS
from models.Petition import Petition

BASE_URL = "https://www.change.org"

res = req.get('https://www.change.org/petitions')
src = res.content
soup = BS(src, 'lxml')

rawCards = soup.find_all('a', {"class": "link-block"})

petitions = []

for card in rawCards:
    title = card.find('h4', {"class": "mtn"}).contents[0]
    desc = card.find("p", {"class": "mtxxs"}).contents[0]
    href = BASE_URL + card.attrs['href']
    signatures = card.find("strong").contents[0]
    goal = card.find("p", {"class": "ptxxs"}).find("span", {"class": "type-weak"}).contents[0]
    petition = Petition(title=title, description=desc, goal=goal, signatures=signatures, href=href)
    petitions.append(petition)

print(petitions[0].toString().encode('utf-8'))