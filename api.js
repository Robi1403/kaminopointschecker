function check(){
    const userAddress = document.getElementById("input").value;

    fetch(`https://api.kamino.finance/points/users/${userAddress}/breakdown?env=mainnet-beta`)
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        const points = data.pointsEarnedBorrowLend
        const rank = data.leaderboardRank
        const setData =`<h1>Kamino Points Checker</h1>
        <input type="text" placeholder="Enter your Solana Address">
        <p>Solana Address: <span> ${userAddress} </span></p>
        <p>Leaderboard Rank: <span> ${rank} </span></p>
        <p>Total Points Earned: <span> ${points} </span></p>
        <button>Check</button>`
        document.querySelector('.data').innerHTML = setData;
    })
    .catch(error => console.log(error))
}



