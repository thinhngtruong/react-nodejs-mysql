const express = require('express');
const validate = require('../middlewares/validate.mdw');
const filmModel = require('../models/film.model');

const film_schema = require('../schemas/film.json');

const router = express.Router();

router.get('/', async function (req, res) {

  // const { userId } = req.accessTokenPayload;
  // console.log(userId);

  // const list = [
  //   {
  //     film_id: 1,
  //     title: 'ACADEMY DINOSAUR',
  //     description: 'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies',
  //     release_year: 2006
  //   },
  //   {
  //     film_id: 2,
  //     title: 'ACE GOLDFINGER',
  //     description: 'A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China',
  //     release_year: 2006
  //   },
  // ];

  const list = await filmModel.all();
  res.json(list);
})

router.get('/:id', async function (req, res) {
  const id = req.params.id || 0;
  const film = await filmModel.single(id);
  if (film === null) {
    return res.status(204).end();
  }

  res.json(film);
})

router.post('/', validate(film_schema), async function (req, res) {
  // const schema = {
  //   required: ['title', 'language_id', 'release_year'],
  //   additionalProperties: false,
  //   properties: {
  //     title: {
  //       type: 'string'
  //     },
  //     language_id: {
  //       type: 'integer'
  //     },
  //     release_year: {
  //       type: 'integer'
  //     }
  //   }
  // };
  // const validator = new ajv({ allErrors: true });
  // const fn_validate = validator.compile(film_schema);
  // const is_valid = fn_validate(req.body);
  // if (!is_valid) {
  //   return res.status(400).json(fn_validate.errors);
  // }

  const film = req.body;
  const id_list = await filmModel.add(film);
  film.film_id = id_list[0];
  res.status(201).json(film);
})

router.delete('/:id', async function (req, res) {
  const id = req.params.id || 0;
  if (id === 0) {
    return res.status(304).end();
  }

  await filmModel.del(id);
  res.json({
    message: 'OK'
  })
})

module.exports = router;