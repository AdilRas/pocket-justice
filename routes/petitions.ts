export { };
const Petition = require('../models/Petition');
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', async (req: any, res: any) => {
    const oneDay = 1000 * 60 * 60 * 24;
    try {
        let now = +Date.now();
        const petitions = await Petition.find();
        res.json(petitions);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/', async (req: any, res: any) => {
    const petition = new Petition({
        title: req.body.title,
        description: req.body.description || "",
        href: req.body.href,
        imageHref: req.body.imageHref || "",
        signatures: req.body.signatures || "0",
        goal: req.body.goal || "0"
    });
    try {
        const savedPost = await petition.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
}, (err: any) => {
        console.log(err);
});



module.exports = router;