import React, { Component } from "react";
import api from './api.js'

let colors;

async function color() {
    const res = await api.get("/colors");
    colors = res.data
}

color()

export {colors}