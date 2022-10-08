const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://www.visir.is/'

axios(url)
    .then(response => {
        const html = response.data
        //console.log(html)
        const $ = cheerio.load(html)
        const articles = []

        $('.dre-item__text', html).each(function(){
            const title = $(this).text()
            const link = $(this).find('a').attr('href')
            articles.push({
                title,
                link
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT PORT ' + PORT))