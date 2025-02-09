console.log("Hello World!")

function monthsSince(dateInput) {
    let inputDate = new Date(dateInput); // Convert input to Date object
    let currentDate = new Date(); // Get today's date

    let yearDiff = currentDate.getFullYear() - inputDate.getFullYear();
    let monthDiff = currentDate.getMonth() - inputDate.getMonth();
    let totalMonths = yearDiff * 12 + monthDiff;

    // Adjust if the day of inputDate hasn't passed in the current month
    if (currentDate.getDate() < inputDate.getDate()) {
        totalMonths--;
    }

    return totalMonths;
}


function create_playlist_video(thumbnail, time_given, video_name, channel_name, views, post_date) {
    let views_showed = 0
    if (views>1000000000){
        views_showed= Math.floor(views/100000000);
        views_showed /= 10;
        views_showed = views_showed.toString()+ "B";
    }
    else if (views>1000000){
        views_showed= Math.floor(views/100000);
        views_showed /= 10;
        views_showed = views_showed.toString()+ "M";
    }
    else if (views>1000){
        views_showed= Math.floor(views/100);
        views_showed /= 10;
        views_showed = views_showed.toString()+ "k";
    }
    else{
        views_showed = views_showed.toString();
    }

    let months = monthsSince(post_date);
    let output_months = ""
    if (months>12){
        output_months = `${Math.floor(months/12)} years ago`;
    }
    else {
        output_months = `${months} months ago`
    }

    code = `
        <div class="container">
            <div class="image-side">
                <img src="${thumbnail}" alt="Thumbnail" class="thumbnail-image">
                <div class="time-on-pic">
                    ${time_given}
                </div>
            </div>
            <div class="text-side">
                <div class="video-name">
                    ${video_name}
                </div>
                <div class="metadata">
                    <a href="#" class="channel-name">${channel_name}</a>
                    <p class="meta-data-stuff">&#x2022;   ${views_showed} views   &#x2022; ${output_months}</p>

                </div>
            </div>
        </div>
    `
    document.body.innerHTML = document.body.innerHTML + code



    
}
