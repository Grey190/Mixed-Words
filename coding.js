// Start of JavaScript Coding
const who = [
  'man',
  'woman',
  'cat',
  'dog',
  'rhino',
  'lion',
  'mouse',
  'pigeon'];

const what = [
  'playing chess',
  'playing football for England',
  'singing in a choir',
  'loungin on the sofa',
  'cooking dinner',
  'walking along the beach',
  'watering the flowers',
  'having an afternoon tea'];

const withWho = [
  'lady next door',
  'goldfish',
  'bakers girl',
  'tiger',
  'elephant',
  'postman',
  'teddy bear',
  'snake'];

const time = [
  'midday',
  'midnight',
  '8am',
  '5pm',
  ',I dont know, I dont wear a watch,',
  'dinner time',
  'breakfast time',
  '11am'];

const where = [
  'in Frankie and Bennys restaurant',
  'at Wembley',
  'at a Garden Center',
  'in a Cathedral',
  'at a Zoo',
  'at the Airport',
  'at a hot sandy beach',
  'in a NightClub'];

const sentence = (who, what, withWho, time, where) => {
  who = who[Math.floor(Math.random() * who.length)];
  what = what[Math.floor(Math.random() * what.length)];
  withWho = withWho[Math.floor(Math.random() * withWho.length)];
  time = time[Math.floor(Math.random() * time.length)];
  where = where[Math.floor(Math.random() * where.length)];
  
  console.log(`The ${ who } was ${ what } with their best friend the ${ withWho }. This all happened at around ${ time } ${ where }.`);
};

sentence(who, what, withWho, time, where);
