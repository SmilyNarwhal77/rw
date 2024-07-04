let playerinfo = [];
playerinfo[0] = [Test, TestUser1, testuser, 100, 5, 5, 25, f];
playerinfo[1] = [Keegan, dragonfyre23, keegan23.tan, 100, 5, 5, 25, e];
localStorage.setItem('playerinfo', JSON.stringify(playerinfo));
let playerinfo2 = JSON.parse(playerinfo);
document.write(playerinfo2);
console.log(playerinfo2);
