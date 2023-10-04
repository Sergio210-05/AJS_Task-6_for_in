export default function orderByProps(char, sortList) {
  const arr = [];
  let currentIndex = 0;
  const charKeys = Object.keys(char).sort();
  // console.log(charKeys);

  for (let sortStat = 0; sortStat < sortList.length; sortStat += 1) {
    charKeys.splice(currentIndex, 0, charKeys.splice(charKeys.indexOf(sortList[sortStat]), 1)[0]);
    currentIndex += 1;
  }
  // console.log(charKeys);

  charKeys.forEach((stat) => {
    const row = {
      key: stat,
      value: char[stat],
    };
    arr.push(row);
  });
  return arr;
}

// const obj = {
//   name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
// };
// const character = orderByProps(obj, ['name', 'level', 'defence']);

// console.log(character);
