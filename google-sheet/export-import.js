// const userInfo = {
//     name: "Aravind",
//     age: 23,
//     role: "SDE"
// }
// // data.json

// // Blob => constructor function => file data 
// let blob = new Blob([JSON.stringify(userInfo)], { type: "text/plain" });

// // for the above file object or blob object create a downloadable link
// let downloadableLink = URL.createObjectURL(blob);

// let anchor = document.createElement("a");
// anchor.href = downloadableLink;
// anchor.download = "amit.json";

// // anchor.click();


// Import 

const fileInput = document.querySelector("input");

fileInput.addEventListener("change", (event) => {
    let file = event.target.files[0];

    let fileReader = new FileReader();


    fileReader.onload = function (e) {
        // this function will be triggered when the file is completely loaded on to the browser
        let extractedData = e.target.result
        console.log(extractedData);
        console.log(JSON.parse(extractedData));
    }
    fileReader.readAsText(file); // reads the data inside the file object

})
