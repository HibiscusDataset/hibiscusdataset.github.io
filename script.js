// function downloadDataset() {
//     // URL of the dataset (replace with actual link)
//     const datasetUrl = "https://your-cloud-storage.com/path-to-dataset.zip";

//     // Create an invisible download link
//     const link = document.createElement("a");
//     link.href = datasetUrl;
//     link.setAttribute("download", "dataset.zip"); // File name after download
//     document.body.appendChild(link);
    
//     // Simulate a click to trigger the download
//     link.click();
    
//     // Remove the link from the DOM
//     document.body.removeChild(link);
// }

// // Call this function when a button is clicked
// document.getElementById("download").addEventListener("click", downloadDataset);




const textOptions = ["ROSA SENIS", "SABDARIFFA", "MUTABILUS"];
let index = 0;

console.log("worj")


function changeText() {
    index = (index + 1) % textOptions.length;
    document.getElementById("changingText").textContent = textOptions[index];
    console.log("worj")
}

setInterval(changeText, 2000); 