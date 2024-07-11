import express from "express";

import {
    GET_FILMS,
    INSERT_FILMS,
    GET_SORTED_FILMS,
    DELETE_FILM_BY_ID,
    GET_FILM_BY_ID,
    PUT_FILM_BY_ID
} from "../controller/film.js";

const router=express.Router()

router.get(`/films`, GET_FILMS);
router.post(`/films`, INSERT_FILMS);
router.put(`/films/:id`, PUT_FILM_BY_ID);
router.get(`/films/sorted`, GET_SORTED_FILMS);
router.delete('/films/:id', DELETE_FILM_BY_ID);
router.get(`/films/:id`, GET_FILM_BY_ID);

export default router;