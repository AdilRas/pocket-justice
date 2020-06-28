import requests as req
from bs4 import BeautifulSoup as BS
from models.Petition import Petition

BASE_URL = 'https://www.thepetitionsite.com'

res = req.get('https://www.thepetitionsite.com/browse-petitions')
src = res.content
soup = BS(src, 'lxml')
print(soup)
rawCards = soup.find_all('div', {"class": "petition"})


petitions = []

for card in rawCards:
    title = card.find('div', {"class": "title"}).contents[0]
    desc = None
    href = BASE_URL + card.attrs['href']

    #creating new request to access content on each petition's actual page
    res1 = req.get(href)
    src1 = res1.content
    soup1 = BS(src1, 'lxml')
    rawCard1 = soup1.find('div', {"class": "progress hide_from_unsigned progress-completed"})

    signatures = rawCard1.find("div", {"class": "progress__supporters"}).contents[0]
    goal = rawCard1.find("div", {"class": "progress__goal"}).contents[0]

    petition = Petition(title=title, description=desc, goal=goal, signatures=signatures, href=href)
    petitions.append(petition)

print(petitions[0].toString())

