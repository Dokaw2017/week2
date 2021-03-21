'use strict';

const express = require('express');
const router = express.Router();
const multer  = require('multer');

const catController = require('../controllers/catController');

const upload = multer({ dest: 'uploads/' })

router.get('/', catController.cat_list_get);
router.get('/:id',catController.cat_get);
router.post('/', upload.single('cat'),catController.cat_create_post);

module.exports = router