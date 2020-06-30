import requests as req
from bs4 import BeautifulSoup as BS
from models.Petition import Petition
import json
from math import ceil
import os
import sys
BASE_URL = 'https://www.thepetitionsite.com'
headers = {
    "User-Agent": "BeautifulSoup"
}

petitions = []


def printData():
    words = []
    with open(os.path.join(sys.path[0], "keywords.txt"), 'r') as file:
        for line in file:
            words.append(line)
    print('[', end='')
    for i, petition in enumerate(petitions):
        if int(petition.signatures) < 1000:
            continue
        # foundKeyword = False
        # for word in words:
        #     if petition.title.lower().__contains__(word.lower()) or petition.description.lower().__contains__(word.lower()):
        #         foundKeyword = True
        #         break
        # if not foundKeyword:
        #     continue
        print(',' if i > 0 else '')
        print(petition.toJsonString(), end='')
        # print((repr(petition.toJsonString().encode('utf-8')))[2:-1], end="")
    print('\n]')

def estimateGoal(signatures):
    if signatures < 15000:
        return int(ceil((signatures + 1) / 1000) * 1000)
    else:
        return int(5000 * ceil((signatures + 1) / 5000.0))

def scrapePage(path):
    res = req.get(path, headers=headers)
    src = res.content
    soup = BS(src.decode('utf-8', 'ignore'), 'lxml')
    desc = soup.find('div', {"class": "overview"}).get_text()
    image = soup.find('div', {"class": "thumbnail"}).contents[0].attrs['src']
    reqId = "".join(path.split("/")[4:7]) if path.__contains__("takeaction") else "".join(path.split("/")[3:6])
    # print(reqId)
    signatures = req.get(
        'https://www.thepetitionsite.com/servlets/petitions/signatures.php',
        headers=headers,
        params={"petitionID": reqId}).json()['signature_count']
    goal = estimateGoal(int(signatures))
    return (desc, image, signatures, goal)


def scrape():
    res = req.get(
        'https://www.thepetitionsite.com/browse-petitions/#hottest', headers=headers)
    src = res.content
    soup = BS(src.decode('utf-8', 'ignore'), 'lxml')
    # print(soup)
    rawCards = soup.find_all("div", {"class": "petition"})
    for card in rawCards:
        title = card.find('div', {"class": "title"}).contents[1].contents[0]
        href = BASE_URL + card.contents[0].find('a').attrs['href']
        # print(href)
        #creating new request to access content on each petition's actual page
        # res1 = req.get(href, headers=headers)
        # src1 = res1.content
        # soup1 = BS(src1, 'lxml')
        description, imageHref, signatures, goal = scrapePage(href)
        petitions.append(Petition(title, href, str(signatures), str(goal), description, imageHref))

scrape()
printData()

