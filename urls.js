const fs = require("fs");
const axios = require("axios");
const process = require("process");
const { resolve } = require("path");
const { rejects } = require("assert");
const e = require("express");



// note, currently if there's an error thrown because of the fake url in urls.txt
// it won't write the new files, if I remove the fake url it works fine. I know why 
// this happens, the error is occuring before fs.writefiles and it jumps the function 
// to the catch before it can execute the writes. I just don't know how to fix it. 


function getUrls(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        let urls = [];
        data.split(/\r?\n/).forEach((line) => {
          urls.push(line);
        });
        resolve(urls);
      }
    });
  });
}

async function getData(path) {
  try {
    const urls = await getUrls(path);
    const hostnames = [];

    for (let url of urls) {
      const parsedUrl = new URL(url);
      hostnames.push(parsedUrl.hostname);
    }
    const promises = urls.map((url) => axios.get(url));

    const responses = await Promise.all(promises);
    const html = responses.map((response) => response.data);

    for (let i = 0; i < hostnames.length; i++) {
      const filename = hostnames[i];
      const data = html[i];
      fs.writeFile(filename, data, (err) => {
        if (err) {
          console.log(`Couldn't write to ${filename}`);
        } else {
          console.log(`Wrote to ${filename}`);
        }
      });
    }
    return html;
  } catch(err){
    console.log(`Couldn't download ${err.message}`);
  }
}

getData(process.argv[2]);
