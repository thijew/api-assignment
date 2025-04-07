import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.get("/", async (req, res) => {
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&imgonly=True&ps=12`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  res.render("index", { art: data.artObjects });
});

router.get("/art/:id", async (req, res) => {
  const apiKey = process.env.API_KEY;
  const id = req.params.id;
  const apiUrl = `https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  res.render("detail", { art: data.artObject });
});

export default router;
