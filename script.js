const collection = [
    {
        name: "Scriabin - Etude, Op. 42 No. 5",
        image: "",
        link: "https://www.youtube.com/watch?v=dQDKjDeV5W0",
        composer: "Alexander Scriabin",
        genre: "Classical",
        period: "Romantism",
        instrument: "Instrument: Piano",
        performer: "Perfomed by Daniil Trifonov",
        },
    {
        name: "Rachmaninov - Piano Concerto No. 2 in C minor Op. 18",
        link: "https://www.youtube.com/watch?v=XdvbVI6WbQw",
        composer: "Sergei Rachmaninov",
        genre: "Classical",
        period: "Romantism",
        instrument: [ "Instrument: Piano", " Orchestra"],
        performer: "Perfomed by Yuja Wang",
    },
    {
        name: "Liszt - 12 Transcendental Études, S.139",
        link: "https://www.youtube.com/watch?v=kD4T-rNklsY",
        composer: "Franz Liszt",
        genre: "Classical",
        period: "Romantism",
        instrument: "Instrument: Piano",
        performer: "Perfomed by Daniil Trifonov",
    },
    {
        name: "Liszt - Mephisto Waltz No. 1, S. 514",
        link: "https://www.youtube.com/watch?v=Um1OmSQi_P4",
        composer: "Franz Liszt",
        genre: "Classical",
        period: "Romantism",
        instrument: "Instrument: Piano",
        performer: "Perfomed by Vladimir Horowitz",
    },
    {
        name: "Liszt - Vallée d'Obermann S. 160, No. 6",
        link: "https://www.youtube.com/watch?v=9p1qK57H_6k",
        composer: "Franz Liszt",
        genre: "Classical",
        period: "Romantism",
        instrument: "Instrument: Piano",
        performer: "Perfomed by Vladimir Horowitz",
    },
    {
        name: "Prokofiev - Piano Concerto No. 2 in G minor Op. 16",
        link: "https://www.youtube.com/watch?v=7bf-Vxl-eew",
        composer: "Sergei Prokofiev",
        genre: "Classical",
        period: "Romantism",
        instrument: [ "Instrument: Piano", " Orchestra"],
        performer: "Perfomed by Yuja Wang",
    },
    {
        
        name: "Ravel - Pavane for a Dead Princess",
        link: "https://www.youtube.com/watch?v=eGybwV3U9W8",
        composer: "Maurice Ravel",
        genre: "Classical",
        period: "Impressionism",
        instrument: "Instrument: Piano",
        performer: ["Perfomed by Maurice Ravel", " By composer"],
    },
    {
        name: "Ravel - Gaspard de la nuit M. 55",
        link: "https://www.youtube.com/watch?v=HjDZlSNG3Ng",
        composer: "Maurice Ravel",
        genre: "Classical",
        period: "Impressionism",
        instrument: "Instrument: Piano",
        performer: "Perfomed by Lucas Debargue ",
    },
    {
        name: "Debussy - Two sets of Images L. 110, L. 111",
        link: "https://www.youtube.com/watch?v=L47SRue0gt8",
        composer: "Claude Debussy",
        genre: "Classical",
        period: "Impressionism",
        instrument: "Instrument: Piano",
        performer: "Perfomed by Pascal Rogé",
    },
    {
        name: "Tigran Hamasyan - La Roque d'Antheron 2011",
        link: "https://www.youtube.com/watch?v=-Ngn_CYMiw4",
        composer: "Tigran Hamsyan",
        genre: "Jazz",
        period: "Contemporary",
        instrument: "Instrument: Piano",
        performer: ["Perfomed by Tigran Hamasyan", " By composer"],
    },
    {
        name: "Chick Corea & Hiromi Uehara Medley at concert",
        link: "https://www.youtube.com/watch?v=XaNk19CQfto",
        composer: ["Chick Corea", " Hiromi Uehara"],
        genre: "Jazz",
        period: "Contemporary",
        instrument: "Instrument: Piano",
        performer: ["Perfomed by Chick Corea", " Hiromi Uehara", " By composer"],
    },
  ];


  const main = document.querySelector('main')

  for (let i=0;i<collection.length;i++) {
      console.log(collection[i].name)

      const article = document.createElement('article')
      article.className = 'card'
      main.appendChild(article)

      

      const vidp = document.createElement('img')
      vidp.innerHTML = collection[i].image
      vidp.className = 'videopreview'
      article.appendChild(vidp)

      const category = document.createElement('div')
      category.className = "categories"
      article.appendChild(category)

      const title = document.createElement('h1')
      title.innerText = collection[i].name
      article.appendChild(title)

      const performers = document.createElement('h2')
      performers.innerText = collection[i].performer
      article.appendChild(performers)

      const genres = document.createElement('p')
      genres.innerHTML = collection[i].genre
      genres.className = 'genres'
      category.appendChild(genres)

      const periods = document.createElement('p')
      periods.innerHTML = collection[i].period
      periods.className = 'periods'
      category.appendChild(periods)

      const ul = document.createElement('ul')
      article.appendChild(ul)

      const li = document.createElement('li')
      ul.appendChild(li)
      li.innerHTML = collection[i].composer

      const li2 = document.createElement('li')
      ul.appendChild(li2)
      li2.innerHTML = collection[i].instrument
    
      const a = document.createElement('a')
      article.appendChild(a)
      a.href = collection[i].link

      const img = document.createElement('img')
      a.appendChild(img)
      


  }