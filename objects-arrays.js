//objects
//Objects are un-ordered collections of datas using keys and values.

const max = {
    name: "Maxiel" ,
    city: "bogota" ,
    food: "🍔" ,
    wantsSheWant: "love" ,
    sheCryRightNow: true,
    address:{
        street: "123",
        apt: "216"
    }

};

const propfood = 'food';

console.log(max.address.street);
console.log(max.name);
console.log(max[propfood]);


//Arrays-----
//are ordered collections of data. If you put something in an array,
//it has an order. For example, you might a list of the days of the week.

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[4]);