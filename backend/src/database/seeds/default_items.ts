import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    {
      title: "Lamps",
      image: "lamp.svg",
    },
    {
      title: "Batteries",
      image: "battery.svg",
    },
    {
      title: "Papers and Cardboards",
      image: "paper-cardboard.svg",
    },
    {
      title: "Eletronics Waste",
      image: "electronic.svg",
    },
    {
      title: "Organic Waste",
      image: "organic.svg",
    },
    {
      title: "Oil",
      image: "oil.svg",
    },
  ]);
}
