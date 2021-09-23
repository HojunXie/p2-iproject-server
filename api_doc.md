# Movie Forum
Movie Forum is an application to discuss & talks about movies. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

## Endpoint List
- GET /movies
- GET /movies/popular
- GET /threads/:id
- POST /threads
- PUT /threads/:id
- DELETE /threads/:id
- GET /topics/:type/:id
- POST /topics
- PUT /topics/:id
- DELETE /topics/:id
- POST /users/register
- POST /users/login

## RESTful endpoints

## POST /users/register

> User register

_Request Header_
```
not needed
```

_Request Body_
```
{
  "username": "<username to insert into>",
  "email": "<email to insert into>",
  "password": "<password to insert into>",
}
```

_Response (201 - Created)_
```
{
  "id": 1,
  "username": "<username>"
  "email": "<user email>",
}
```

_Response (400 - Bad Request)_
```
{
  "message": "validation errors"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```
---
## POST /users/login

> User Login

_Request Header_
```
not needed
```

_Request Body_
```
{
  "username": "<username to compare to db>",
  "password": "<password to compare to db>"
}
```

_Response (200)_
```
{
  "access_token": "<user access token>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "validation errors"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---

## GET /movies

> get movies by query from 2 3rd party api from 3 endpoints 

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Query_
```
  {
    title: <movie title> (required),
    page: <data page> (optional)
  }
```

_Response (200)_
```
[
  {
    "anilist_id": 2025,
    "mal_id": 2025,
    "format": 0,
    "status": 0,
    "titles": {
      "en": "Darker than BLACK: Kuro no Keiyakusha",
      "jp": "Darker than BLACK -黒の契約者-"
    },
    "descriptions": {
      "en": "In Tokyo, an impenetrable field known as \"Hell's Gate\" appeared ten years ago. At the same time, psychics who wield paranormal powers at the cost of their conscience also emerged. Hei is one of the most powerful of these psychic agents, and along with his blind associate, Yin, works for one of the many rival agencies vying to unlock the mysteries of Hell's Gate.\n<br><br>\n(Source: Anime News Network)"
    },
    "start_date": "2007-04-06T00:00:00Z",
    "end_date": "2007-09-28T00:00:00Z",
    "season_period": 1,
    "season_year": 2007,
    "episodes_count": 25,
    "episode_duration": 24,
    "cover_image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b2025-Osdi7gyQFTnr.png",
    "cover_color": "#c9781a",
    "banner_image": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2025-Fx3ALDmrOulv.jpg",
    "genres": [
      "Action",
      "Mystery",
      "Sci-Fi",
      "Super Power",
      "Noir",
      "Conspiracy",
      "Tragedy",
      "Assassins",
      "Anti-Hero",
      "Urban",
      "Crime",
      "Urban Fantasy",
      "Police",
      "Seinen",
      "Episodic",
      "Espionage",
      "Triads",
      "Yakuza",
      "Memory Manipulation",
      "Time Manipulation",
      "Kuudere",
      "Mafia",
      "Detective"
    ],
    "score": 78,
    "id": 822
  },
  {
    "adult": false,
    "backdrop_path": "/6H0CfLRcgq0Pcq34wNypC2V3W41.jpg",
    "genre_ids": [
      878,
      28,
      12
    ],
    "id": 320288,
    "original_language": "en",
    "original_title": "Dark Phoenix",
    "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
    "popularity": 112.994,
    "poster_path": "/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
    "release_date": "2019-06-05",
    "title": "Dark Phoenix",
    "video": false,
    "vote_average": 6,
    "vote_count": 4795
  },
  {
    "backdrop_path": "/75HgaphatW0PDI3XIHQWZUpbhn6.jpg",
    "first_air_date": "2017-12-01",
    "genre_ids": [
      10765,
      18,
      9648,
      80
    ],
    "id": 70523,
    "name": "Dark",
    "origin_country": [
      "DE"
    ],
    "original_language": "de",
    "original_name": "Dark",
    "overview": "A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.",
    "popularity": 134.866,
    "poster_path": "/nlTUgbZY1E4Dr5B25zLLkudIaV.jpg",
    "vote_average": 8.4,
    "vote_count": 4510
  }
]
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---
## GET /movies/popular

> Get popular movies from 3rd party API

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
"page": 4,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
      "genre_ids": [
        27,
        9648,
        53
      ],
      "id": 423108,
      "original_language": "en",
      "original_title": "The Conjuring: The Devil Made Me Do It",
      "overview": "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
      "popularity": 397.796,
      "poster_path": "/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
      "release_date": "2021-05-25",
      "title": "The Conjuring: The Devil Made Me Do It",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 3648
    }
  ],
  "total_pages": 500,
  "total_results": 10000
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---

## GET /threads/:id

> get threads by topic id

_Request Headers_
```
not needed
```

_Request Body_
```
not needed
```

_Params_
```
  {
    id: <topic id>
  }
```

_Response (200)_
```
  {
    "id": 1,
    "title": "COOL",
    "userId": 1,
    "topicId": 39,
    "content": "wow this series is so awesome lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    "imgUrl": "https://ik.imagekit.io/rspcz3fmbxb/auditorium-2584269_1920_4_paQLyWjd.jpg",
    "embed": "https://www.youtube.com/watch?v=Zy6blNN-InY",
    "createdAt": "2021-09-23T18:57:36.155Z",
    "updatedAt": "2021-09-23T18:57:36.155Z",
    "User": {
      "id": 1,
      "username": "test123",
      "email": "test1@mail.com",
      "createdAt": "2021-09-23T14:29:34.474Z",
      "updatedAt": "2021-09-23T14:29:34.474Z"
    }
  }
```

_Response (404 - Not Found)_
```
{
  error: "not found"
}
```

_Response (400 - Bad Request)_
```
{
  error: "Params id must be a number"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---
## POST /threads

> create new thread

_Request Headers_
```
{
  access_token: <user access token>
}
```

_Request Body_
```
  {
    title: <thread title>,
    content: <thread content>,
    topicId: <topic id>,
    embed: <video link>,
    imgUrl: <image file>
  }
```

_Response (201)_
```
{
  "id": 1,
  "title": "COOL",
  "content": "wow this series is so awesome lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  "embed": "https://www.youtube.com/watch?v=Zy6blNN-InY",
  "imgUrl": "https://ik.imagekit.io/rspcz3fmbxb/auditorium-2584269_1920_4_paQLyWjd.jpg",
  "userId": 1,
  "topicId": 39,
  "updatedAt": "2021-09-23T18:57:36.155Z",
  "createdAt": "2021-09-23T18:57:36.155Z"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---
## PUT /threads/:id

> update existing thread

_Request Headers_
```
{
  access_token: <user access token>
}
```

_Request Body_
```
  {
    title: <thread title>,
    content: <thread content>,
    embed: <video link>,
    imgUrl: <image file>
  }
```

_Params_
```
  {
    id: <thread id>
  }
```

_Response (200)_
```
{
  "id": 2,
  "title": "COOL",
  "userId": 1,
  "topicId": 39,
  "content": "wow this series is so awesome lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  "imgUrl": "https://ik.imagekit.io/rspcz3fmbxb/auditorium-2584269_1920_amgFdrFqO.jpg",
  "embed": "https://www.youtube.com/watch?v=Zy6blNN-InY",
  "createdAt": "2021-09-23T19:01:25.949Z",
  "updatedAt": "2021-09-23T19:09:10.058Z"
}
```

_Response (404 - Not Found)_
```
{
  error: "not found"
}
```

_Response (400 - Bad Request)_
```
{
  error: "Params id must be a number"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---
## DELETE /threads/:id

> delete thread

_Request Headers_
```
{
  access_token: <user access token>
}
```

_Request Body_
```
not needed
```

_Params_
```
  {
    id: <thread id>
  }
```

_Response (200)_
```
{
  "id": 2,
  "title": "COOL",
  "userId": 1,
  "topicId": 39,
  "content": "wow this series is so awesome lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  "imgUrl": "https://ik.imagekit.io/rspcz3fmbxb/auditorium-2584269_1920_amgFdrFqO.jpg",
  "embed": "https://www.youtube.com/watch?v=Zy6blNN-InY",
  "createdAt": "2021-09-23T19:01:25.949Z",
  "updatedAt": "2021-09-23T19:09:10.058Z"
}
```

_Response (404 - Not Found)_
```
{
  error: "not found"
}
```

_Response (400 - Bad Request)_
```
{
  error: "Params id must be a number"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---

## GET /topics/:type/:id

> get topics by movie type and movie id

_Request Headers_
```
not needed
```

_Request Body_
```
  not needed
```

_Params_
```
  {
    id: <movie id in api>,
    type: <api endpoint>
  }
```

_Response (200)_
```
{
  "id": 1,
  "title": "Very Great Show",
  "subtitle": "astonishing",
  "userId": 1,
  "movieId": 75023,
  "movieType": "Tv",
  "createdAt": "2021-09-23T15:26:17.678Z",
  "updatedAt": "2021-09-23T15:30:07.755Z"
  "User": {
      "id": 1,
      "username": "test123",
      "email": "test1@mail.com",
      "createdAt": "2021-09-23T14:29:34.474Z",
      "updatedAt": "2021-09-23T14:29:34.474Z"
  }
}
```

_Response (404 - Not Found)_
```
{
  error: "not found"
}
```

_Response (400 - Bad Request)_
```
{
  error: "Params id must be a number"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---
## POST /topics

> create new topic

_Request Headers_
```
{
  access_token: <user access token>
}
```

_Request Body_
```
  {
    title: <topic title>,
    subtitle: <topic subtitle>,
    movieId: <movie id>,
    movieType: <movie type>
  }
```

_Response (201)_
```
{
  "id": 1,
  "title": "Very Great Show",
  "subtitle": "astonishing",
  "userId": 1,
  "movieId": 75023,
  "movieType": "Tv",
  "createdAt": "2021-09-23T15:26:17.678Z",
  "updatedAt": "2021-09-23T15:30:07.755Z"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---
## PUT /topics/:id

> update existing topic

_Request Headers_
```
{
  access_token: <user access token>
}
```

_Request Body_
```
  {
    title: <topic title>,
    subtitle: <topic subtitle>
  }
```

_Params_
```
  {
    id: <topic id>
  }
```

_Response (200)_
```
{
  "id": 1,
  "title": "Very Great Show",
  "subtitle": "astonishing",
  "userId": 1,
  "movieId": 75023,
  "movieType": "Tv",
  "createdAt": "2021-09-23T15:26:17.678Z",
  "updatedAt": "2021-09-23T15:30:07.755Z"
}
```

_Response (404 - Not Found)_
```
{
  error: "not found"
}
```

_Response (400 - Bad Request)_
```
{
  error: "Params id must be a number"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---
## DELETE /topics/:id

> delete topic

_Request Headers_
```
{
  access_token: <user access token>
}
```

_Request Body_
```
  not needed
```

_Params_
```
  {
    id: <topic id>
  }
```

_Response (200)_
```
{
  "id": 1,
  "title": "Very Great Show",
  "subtitle": "astonishing",
  "userId": 1,
  "movieId": 75023,
  "movieType": "Tv",
  "createdAt": "2021-09-23T15:26:17.678Z",
  "updatedAt": "2021-09-23T15:30:07.755Z"
}
```

_Response (404 - Not Found)_
```
{
  error: "not found"
}
```

_Response (400 - Bad Request)_
```
{
  error: "Params id must be a number"
}
```

_Response (500 - Internal Server Error)_
```
{
  "error": "error"
}
```

---