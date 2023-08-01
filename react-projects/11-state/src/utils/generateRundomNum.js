function generateRundomNum(maxNum) {
    const rundomNum = Math.floor(Math.random() * maxNum);// console.log("rundomNum=", rundomNum);;

    return rundomNum;
}

export default generateRundomNum;