import User from "../models/user";
import Event from "../models/event";
import Comment from "../models/comment";
import { v4 as uuidv4 } from "uuid";

User.bulkCreate([
  {
    id: uuidv4(),
    name: "David",
    email: "david@email.com",
    password: "admin123",
    eventAttend: [],
    eventAttended: [],
  },
  {
    id: uuidv4(),
    name: "Romi",
    email: "romi@email.com",
    password: "user123",
    eventAttend: [],
    eventAttended: [],
  },
  {
    id: uuidv4(),
    name: "Nilu",
    email: "nilu@email.com",
    password: "user456",
    eventAttend: [],
    eventAttended: [],
  },
  {
    id: uuidv4(),
    name: "Philip",
    email: "philip@email.com",
    password: "user789",
    eventAttend: [],
    eventAttended: [],
  },
])
  .then((res) => {
    let userid: string[] = [];
    res.map((user) => {
      let id = user.id;
      userid.push(id);
    });

    Event.bulkCreate([
      {
        id: uuidv4(),
        title: "Learn Javascript",
        description:
          "Pellentesque porta urna a ex rhoncus varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ante sed enim eleifend vulputate. In ultrices nulla ac lacus aliquam pharetra. Etiam viverra elit mauris, eget cursus lorem sagittis at. Suspendisse id euismod eros.",
        date: new Date("2022-02-15"),
        time: "18:00",
        location: { street: "", city: "Stockholm" },
        reviews: [],
        digitalEvent: true,
        availableSeats: 20,
        UserId: userid[0],
        eventImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80", 
      },

      {
        id: uuidv4(),
        title: "Are you ready to learn Typescript?",
        description:
          "Ut vulputate ante sed enim eleifend vulputate. In ultrices nulla ac lacus aliquam pharetra. Etiam viverra elit mauris, eget cursus lorem sagittis at. Suspendisse id euismod eros.",
        date: new Date("2022-03-15"),
        time: "18:00",
        location: { street: "", city: "Stockholm" },
        reviews: [],
        digitalEvent: true,
        availableSeats: 20,
        UserId: userid[0],
        eventImg: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      },

      {
        id: uuidv4(),
        title: "Virtual Tour in the Moderna Museum",
        description:
          "Pellentesque porta urna a ex rhoncus varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ante sed enim eleifend vulputate. In ultrices nulla ac lacus aliquam pharetra. Etiam viverra elit mauris, eget cursus lorem sagittis at. Suspendisse id euismod eros. Duis convallis mauris malesuada placerat aliquam. Aenean sagittis efficitur commodo.",
        date: new Date("2022-03-25"),
        time: "18:00",
        location: { street: "", city: "Stockholm" },
        reviews: [],
        digitalEvent: true,
        availableSeats: 30,
        UserId: userid[1],
        eventImg: "https://images.unsplash.com/photo-1541665234574-8e72eb7cd028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },

      {
        id: uuidv4(),
        title: "Celebrate midsommar with us",
        description:
          "Consectetur adipiscing elit. Ut vulputate ante sed enim eleifend vulputate. In ultrices nulla ac lacus aliquam pharetra. Etiam viverra elit mauris, eget cursus lorem sagittis at. Suspendisse id euismod eros.",
        date: new Date("2022-06-24"),
        time: "15:00",
        location: { street: "Långholmsbadet", city: "Stockholm" },
        reviews: [],
        digitalEvent: false,
        availableSeats: 20,
        UserId: userid[1],
        eventImg: "https://images.unsplash.com/photo-1579457870378-16e766c0c266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
      },

      {
        id: uuidv4(),
        title: "Learn Chinese in the Stockholm downtown",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ante sed enim eleifend vulputate. In ultrices nulla ac lacus aliquam pharetra. Etiam viverra elit mauris, eget cursus lorem sagittis at. Suspendisse id euismod eros. Duis convallis mauris malesuada placerat aliquam. Aenean sagittis efficitur commodo.",
        date: new Date("2022-02-15"),
        time: "16:00",
        location: { street: "Stortorget 2", city: "Stockholm" },
        reviews: [],
        digitalEvent: false,
        availableSeats: 20,
        UserId: userid[2],
        eventImg: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },

      {
        id: uuidv4(),
        title: "Oceanfront yoga",
        description:
          "Pellentesque porta urna a ex rhoncus varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ante sed enim eleifend vulputate. In ultrices nulla ac lacus aliquam pharetra. Etiam viverra elit mauris, eget cursus lorem sagittis at. Suspendisse id euismod eros.",
        date: new Date("2022-03-21"),
        time: "18:00",
        location: { street: "Smedsuddsbadet", city: "Stockholm" },
        reviews: [],
        digitalEvent: false,
        availableSeats: 15,
        UserId: userid[2],
        eventImg: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },

      {
        id: uuidv4(),
        title: "Spring Hackaton",
        description:
          "In ultrices nulla ac lacus aliquam pharetra. Etiam viverra elit mauris, eget cursus lorem sagittis at. Suspendisse id euismod eros.",
        date: new Date("2022-04-05"),
        time: "15:00",
        location: { street: "", city: "Stockholm" },
        reviews: [],
        digitalEvent: true,
        availableSeats: 10,
        UserId: userid[3],
        eventImg: "https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      },

      {
        id: uuidv4(),
        title: "Climbing in Stockholm",
        description:
          "Consectetur adipiscing elit. Ut vulputate ante sed enim eleifend vulputate. In ultrices nulla ac lacus aliquam pharetra. Etiam viverra elit mauris, eget cursus lorem sagittis at. Suspendisse id euismod eros.",
        date: new Date("2022-05-25"),
        time: "18:30",
        location: { street: "Slakthusgatan 26", city: "Stockholm" },
        reviews: [],
        digitalEvent: false,
        availableSeats: 15,
        UserId: userid[3],
        eventImg: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1844&q=80",
      },
    ])
      .then((eventResult) => {
        for (const userobject of res) {
          for (const eventa of eventResult) {
            if (userobject.id === eventa.UserId) {
              userobject.addEvent([eventa]);
              console.log("They are associated");
            }
          }
        }

        return eventResult;
      })

      .then((result) => {
        let eventid: string[] = [];
        result.map((event) => {
          let id = event.id;
          eventid.push(id);
        });

        Comment.bulkCreate([
          {
            id: uuidv4(),
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            EventId: eventid[0],
            UserId: userid[0],
          },
          {
            id: uuidv4(),
            body: "Consectetur adipiscing elit. Ut vulputate ante sed enim eleifend vulputate.",
            EventId: eventid[0],
            UserId: userid[1],
          },

          {
            id: uuidv4(),
            body: "In ultrices nulla ac lacus aliquam pharetra.",
            EventId: eventid[0],
            UserId: userid[3],
          },

          {
            id: uuidv4(),
            body: "Suspendisse id euismod eros.",
            EventId: eventid[1],
            UserId: userid[1],
          },
          {
            id: uuidv4(),
            body: "Pellentesque porta urna a ex rhoncus varius.",
            EventId: eventid[1],
            UserId: userid[2],
          },

          {
            id: uuidv4(),
            body: "Etiam viverra elit mauris, eget cursus lorem sagittis at.",
            EventId: eventid[1],
            UserId: userid[0],
          },
          {
            id: uuidv4(),
            body: "Consectetur adipiscing elit.",
            EventId: eventid[2],
            UserId: userid[3],
          },

          {
            id: uuidv4(),
            body: "Ut vulputate ante sed enim eleifend vulputate.",
            EventId: eventid[2],
            UserId: userid[2],
          },

          {
            id: uuidv4(),
            body: "Etiam viverra elit mauris, eget cursus lorem sagittis at.",
            EventId: eventid[3],
            UserId: userid[2],
          },
          {
            id: uuidv4(),
            body: "Excepteur sint occaecat cupidatat non proident.",
            EventId: eventid[4],
            UserId: userid[1],
          },

          {
            id: uuidv4(),
            body: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
            EventId: eventid[4],
            UserId: userid[2],
          },

          {
            id: uuidv4(),
            body: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            EventId: eventid[5],
            UserId: userid[0],
          },
          {
            id: uuidv4(),
            body: "Sed viverra enim vitae tincidunt placerat. In hac habitasse platea dictumst. ",
            EventId: eventid[5],
            UserId: userid[1],
          },
        ]);
      });
  })

  .catch((error) => {
    console.log(error);
  });
