'use strict';

module.exports.upperPost = function (msg) {
	var news;
	switch(msg.data.root.route) {
    case "posts/":
        news =  "All News";
        break;
    case "/posts/top":
        news =  "Top";
        break;
    case "/posts/latest":
        news =  "Latest";
        break;
    case "/posts/trending":
        news =  "Trending";
        break;
    case "/posts/country/in":
        news =  "India";
        break;
    case "/posts/country/us":
        news =  "USA";
        break;
    case "/posts/country/au":
        news =  "Australia";
        break;
    case "/posts/country/gb":
        news =  "United Kingdom";
        break;
    case "/posts/country/it":
        news =  "Italy";
        break;
    case "/posts/category/music":
        news =  "Music";
        break;
    case "/posts/category/general":
        news =  "General";
        break;
    case "/posts/category/business":
        news =  "Business";
        break;
    case "/posts/category/technology":
        news =  "Technology";
        break;
    case "/posts/category/sport":
        news =  "Sports";
        break;
    case "/posts/category/science-and-nature":
        news =  "Science and Nature";
        break;
    case "/posts/category/entertainment":
        news =  "Entertainment";
        break;
    case "/posts/category/gaming":
        news =  "Gaming";
        break;                    
    default:
        news = "All News";
}
    return news;
};
