var posts = [
    {
        postId: 1,
        title: "첫 편지",
        content: "안뇽안뇽",
        date: "2025.04.04"
    },
    {
        postId: 2,
        title: "🧡마음을 보내요🧡",
        content: "내용내용",
        date: "2025.04.07"
    },
    {
        postId: 3,
        title: "반가워~",
        content: "나는 멋쟁이다",
        date: "2025.04.06"
    },
    {
        postId: 4,
        title: "천재가 쓴 편지😎",
        content: "난 왜 이렇게 똑똑할까",
        date: "2025.04.04"
    },
    {
        postId: 5,
        title: "사자들아",
        content: "파이팅",
        date: "2025.04.10"
    },
    {
        postId: 6,
        title: "심바랑 친구할래",
        content: "난 품바니까",
        date: "2025.04.02"
    },
    {
        postId: 7,
        title: "저메추🤔",
        content: "마라탕",
        date: "2025.04.04"
    },
    {
        postId: 8,
        title: "아 배고파",
        content: "붕어빵계란빵국화빵",
        date: "2025.03.24"
    },
    {
        postId: 9,
        title: "슈퍼이끌림💌",
        content: "유유유유",
        date: "2025.04.08"
    },
    {
        postId: 10,
        title: "네잎클로버🍀",
        content: "행운을 보냅니다",
        date: "2025.04.01"
    }
];


function makeLetterWrapper() {
    for (let i = 0; i < posts.length; i++) {
        document.writeln(`
            <div onclick = "showRead(${posts[i].postId})">
                <h3 class = 'letter' >${posts[i].title}</h3>
            </div>
        `);
    }
}

function showRead(postId){
    const title = posts[postId-1].title;
    const content = posts[postId-1].content;
    const date = posts[postId-1].date;

    localStorage.setItem("readTitle", title);
    localStorage.setItem("readContent", content);
    localStorage.setItem("readDate", date);

    location.href = "./read.html";
}

window.onload = function () { //자바스크립트에서 페이지가 로드되면 자동으로 실행되는 전역 콜백함수
    const title = localStorage.getItem("readTitle");
    const content = localStorage.getItem("readContent");
    const date = localStorage.getItem("readDate");

    document.getElementById("title").innerText = title;
    document.getElementById("content").innerText = content;
    document.getElementById("date").innerText = date;
}

function goWrite() {
        location.href = "./write.html";
}
function goMain() {
    location.href = "./main.html";
}
function goDelete(){
    location.href = "./delete.html";
}
function printContents(){
    const title = document.getElementById("title");
    const contents = document.getElementById("contentInputBox");
    const dateString = printDate();
     
    console.log("제목:", title.value);
    console.log("내용:", contents.value);
    console.log("날짜:", dateString);
}

function printDate(){
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    
    var dateString = year + "." + month  + "." + day;
    return dateString;
}