let userId: (string | number | boolean);

userId = 101;
userId = "101";
userId = true;
console.log(userId);


const displayUser = (userNum: string | number) => {
    console.log(userNum);
}

displayUserInfo('101');
displayUserInfo(101);