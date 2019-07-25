---
id: doc3
title: Components explanation
---

A fast and simple resume about the app main components

## App.js

Routes file

## Homepage

Path: `/components/Homepage`

It's where the Header and Slider is called

## Header

Path: `/components/Header`

Just a simple, css only and responsive Header

## Showlist

Path: `/components/Showlist`

The core of the app. It's where we can search a movie and inside `/components/Showlist/components/MovieList` we have the component that renders the movie/serie infos.
I also used the Youtube API to get the movie trailer based on the search query(it could be improved).
I tried using the Google Search API(`https://www.googleapis.com/customsearch/v1?q=${Actors}`) to get each actor image but i wasnt able to fully understand and implement their api.

## Favorites

Path: `/components/Favorites`

The favorites components its where we have all the logic to add a movie or serie as favorite. The idea was simple: Since i dont have a server to store the user favorites shows, i used `localStorage` to store the user data as an array and print them. I should've done more refactoring in this folder but i didnt had the time.

## About

Path: `/components/About`

Just a simple about page talking about the technologies i've used.