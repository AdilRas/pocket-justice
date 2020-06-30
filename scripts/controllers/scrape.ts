const { spawn } = require("child_process");
const foldToAscii = require("fold-to-ascii");
const Petition = require('../../models/Petition');
const nodePath = require('path');

const BASE_PATH = 'scripts/scraping/';
const scrapers = ['thepetitionsite.py', 'changeorg.py'];

export const scrape = () => {
    console.log('Began scraping...');
  for (const scraper of scrapers) {
    console.log(`Running scraper "${scraper}"`);
    const path = nodePath.resolve(BASE_PATH, scraper);

    var dataToSend: string = "";
    // spawn new child process to call the python script
    const python = spawn("python", [path]);
    // collect data from script
    python.stdout.on("data", function (data: any) {
      console.log("Pipe data from python script ...");
      // console.log(decodeURIComponent(escape(data)));
      dataToSend += foldToAscii.foldReplacing(
        data.toString().replace(/\n/g, "").replace(/\r/g, "")
      );
    });

    // in close event we are sure that stream from child process is closed
    python.on("close", (code: any) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      const petitionResponse: any[] = JSON.parse(dataToSend);
      for (let req of petitionResponse) {
        const petition = new Petition({
          _id: req.title,
          title: req.title,
          description: req.description || "",
          href: req.href,
          imageHref: req.imageHref || "",
          signatures: req.signatures || "0",
          goal: req.goal || "0",
        });
        try {
          petition.save().catch((err: any) => {
            console.log(err.toString());
          });
          dataToSend = "";
        } catch (err) {
          console.log(err.toString().substr(0, 50));
        }
      }
    });
  }
};
