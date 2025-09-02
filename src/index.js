#!/usr/bin/env node

async function fetchAndLogRawFile(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText)
      }
      return response.text()
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error('Error fetching file:', error)
    })
}

fetchAndLogRawFile(
  'https://raw.githubusercontent.com/andersonbosa/npx-andersonbosa/refs/heads/main/src/HELLO.md'
)