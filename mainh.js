let playerinfo = [];
playerinfo[0] = [Test, TestUser1.0, testuser@test.com, 100, 5, 5, 25, f];
playerinfo[1] = [Keegan, dragonfyre23, keegan23.tan@gmail.com, 100, 5, 5, 25, e];
localStorage.setItem('playerinfo', JSON.stringify(playerinfo));
let playerinfo = JSON.parse(playerinfo);
document.write(playerinfo);
console.log(playerinfo)
