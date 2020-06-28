import requests as req
from bs4 import BeautifulSoup as BS
from models.Petition import Petition
# import curses

BASE_URL = "https://www.change.org"

petitions = []

def printData():
    print('[', end='')
    for i, petition in enumerate(petitions):
        print(',' if i > 0 else '')
        print(petition.toJsonString(), end='')
        # print((repr(petition.toJsonString().encode('utf-8')))[2:-1], end="")
    print('\n]')
    

def getImageHref(href):
    res = req.get(href)
    src = res.content
    soup = BS(src, 'lxml')

    image = soup.find_all('img')[0].attrs['src']
    return "https:" + image

def scrape():
    res = req.get('https://www.change.org/petitions')
    src = res.content
    soup = BS(src.decode('utf-8', 'ignore'), 'lxml')

    rawCards = soup.find_all('a', {"class": "link-block"})
    # print(soup.encode('utf-8'))
    
    for card in rawCards:
        title = card.find('h4', {"class": "mtn"}).contents[0]
        desc = card.find("p", {"class": "mtxxs"}).contents[0]
        href = BASE_URL + card.attrs['href']
        # Original: xxx,xxx signed -> Final: xxxxxx
        signatures = card.find("strong").contents[0].split(' ')[0].replace(',', '')
        # Original: of x,xxx,xxx goal -> Final: xxxxxxx
        goal = card.find("p", {"class": "ptxxs"}).find(
            "span", {"class": "type-weak"}).contents[0].split(' ')[1].replace(',', '')
        imageHref = getImageHref(href)
        petition = Petition(title=title, description=desc,
                            goal=goal, signatures=signatures, href=href, imageHref=imageHref)
        petitions.append(petition)
        # print(petition.toJsonString().encode('utf-8'))

scrape()
printData()
