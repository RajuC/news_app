var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
/*  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });*/
	res.render('index', {"posts":[
    {
      "url_to_image": "http://www.gannett-cdn.com/-mm-/24354a0b10510876169f1f7fb16a33c89b02519a/c=827-807-1693-1299&r=x633&c=1200x630/local/-/media/USATODAY/GenericImages/2014/07/25/1406324259000-INDIANA.jpg",
      "title": "Police: Live deer set aflame in Indiana",
      "source_id": "usa-today",
      "published_at": "2017-02-25T12:36:13Z",
      "post_url": "http://localhost:4000/trending/20170225876761171557",
      "post_type": "top",
      "post_id": "20170225876761171557",
      "description": "Police say the deer was still alive when someone poured accelerant over the deer and set it on fire.",
      "author": "Holly V. Hays"
    },
    {
      "url_to_image": "http://im.ft-static.com/content/images/e4525b51-36bd-4a70-a217-0a395502bc6c.img",
      "title": "Builders use Help to Buy to support weak market",
      "source_id": "financial-times",
      "published_at": "2017-02-25T11:15:46Z",
      "post_url": "http://localhost:4000/trending/2017022538753101839910",
      "post_type": "top",
      "post_id": "2017022538753101839910",
      "description": "Take-up for property scheme higher in areas where prices have fallen since 2007 peak",
      "author": "Judith Evans"
    },
    {
      "url_to_image": "http://newsimg.bbc.co.uk/media/images/67165000/jpg/_67165916_67165915.jpg",
      "title": "Premier League build-up & your club's worst decision",
      "source_id": "bbc-sport",
      "published_at": "2017-02-25T11:13:14Z",
      "post_url": "http://localhost:4000/trending/20170225879765211449",
      "post_type": "top",
      "post_id": "20170225879765211449",
      "description": "Follow build-up, team news, analysis and the best of social media before six Premier League games this afternoon.",
      "author": "BBC Sport"
    },
    {
      "url_to_image": "http://www.telegraph.co.uk/content/dam/news/2017/02/09/geert-wilders-xlarge_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg",
      "title": "Netherlands holds inquiry on euro after ECB easing hits Dutch pensions",
      "source_id": "the-telegraph",
      "published_at": "2017-02-25T11:12:17Z",
      "post_url": "http://localhost:4000/trending/2017022521035325787107",
      "post_type": "top",
      "post_id": "2017022521035325787107",
      "description": "The Netherlands is to hold a parliamentary inquiry into its future relationship with the euro amid a growing chorus of scepticism about the single currency.",
      "author": "Peter Foster"
    },
    {
      "url_to_image": "https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/mamadou-sakho-cropped_lnfgbs114waz15suxog1kfvii.jpg",
      "title": "Lyon rejected chance to sign Sakho, says Aulas",
      "source_id": "four-four-two",
      "published_at": "2017-02-25T11:01:01Z",
      "post_url": "http://localhost:4000/trending/201702253559105853397",
      "post_type": "top",
      "post_id": "201702253559105853397",
      "description": "Mamadou Sakho could have returned to Ligue 1 with Lyon last month, had Jean-Michel Aulas sanctioned a bid for the Liverpool man.",
      "author": "FourFourTwo"
    },
    {
      "url_to_image": "https://i.guim.co.uk/img/media/25955cff9e2e05571c6d62e39b8508c53f86c92f/0_155_3556_2134/master/3556.jpg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly91cGxvYWRzLmd1aW0uY28udWsvMjAxNi8wNS8yNS9vdmVybGF5LWxvZ28tMTIwMC05MF9vcHQucG5n&s=3397e21a2f6d8783ebf5f8060c6e7804",
      "title": "Kim Jong-nam killing: suspect 'paid $90 to take part in prank'",
      "source_id": "the-guardian-uk",
      "published_at": "2017-02-25T10:56:21Z",
      "post_url": "http://localhost:4000/trending/201702259191064225461",
      "post_type": "top",
      "post_id": "201702259191064225461",
      "description": "Indonesian Siti Aisyah, 25, maintains she was duped into killing half brother of North Korean leader Kim Jong-un with VX poison",
      "author": " Anonymous"
    },
    {
      "url_to_image": "http://20.theladbiblegroup.com/s3/content/491x276/c0d9361958b1ae1e487d73da725442d3.jpg",
      "title": "Tesco Turns Away Man Buying £200 Worth Of Food For Homeless",
      "source_id": "the-lad-bible",
      "published_at": "2017-02-25T10:56:00Z",
      "post_url": "http://localhost:4000/trending/20170225847738461118",
      "post_type": "top",
      "post_id": "20170225847738461118",
      "description": "Unbelievable.",
      "author": "Josh Teal"
    },
    {
      "url_to_image": "https://i.guim.co.uk/img/media/00cbb739871fba7e861baa1e196d09718acc65eb/0_148_4644_2786/master/4644.jpg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly91cGxvYWRzLmd1aW0uY28udWsvMjAxNi8wNS8yNS9vdmVybGF5LWxvZ28tMTIwMC05MF9vcHQucG5n&s=f42ffefe04bba8a225977e9268d8d8b9",
      "title": "Donald Trump press ban: Guardian, BBC and CNN denied access to briefing",
      "source_id": "the-guardian-au",
      "published_at": "2017-02-25T10:54:53Z",
      "post_url": "http://localhost:4000/trending/201702252224108578648",
      "post_type": "top",
      "post_id": "201702252224108578648",
      "description": "The Guardian, New York Times, CNN and more were barred from ‘gaggle’ hours after Trump once again called much of the media an ‘enemy of American people’",
      "author": "Sabrina Siddiqui"
    },
    {
      "url_to_image": "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/01/18/103312369-GettyImages-455053616.1910x1000.jpg",
      "title": "Kudlow: Trump's common-sense growth policy has worked before, and will again",
      "source_id": "cnbc",
      "published_at": "2017-02-25T10:51:44Z",
      "post_url": "http://localhost:4000/trending/201702256648192881062",
      "post_type": "top",
      "post_id": "201702256648192881062",
      "description": "Get rid of the state-sponsored barriers to growth and watch how common-sense policies turn rosy scenario into economic reality.",
      "author": "Larry Kudlow"
    },
    {
      "url_to_image": "https://i.guim.co.uk/img/media/feb96fbfecf7eaae9dda8cde8b40b367f8404a22/0_101_3223_1935/master/3223.jpg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly91cGxvYWRzLmd1aW0uY28udWsvMjAxNi8wNS8yNS9vdmVybGF5LWxvZ28tMTIwMC05MF9vcHQucG5n&s=100e63ce31ae3e06dc00b55334d3f94b",
      "title": "Jodie Foster tells US travel ban protesters: 'It is our time to resist'",
      "source_id": "the-guardian-uk",
      "published_at": "2017-02-25T10:43:53Z",
      "post_url": "http://localhost:4000/trending/2017022584310281771035",
      "post_type": "top",
      "post_id": "2017022584310281771035",
      "description": "Actor speaks out against ‘chaos, ineptitude and war-mongering’ of Trump administration during pre-Oscars protest",
      "author": " Anonymous"
    },
    {
      "url_to_image": "https://metrouk2.files.wordpress.com/2017/02/gettyimages-456342106-e1488012892219.jpg?quality=80&strip=all",
      "title": "Danny Dyer's daughter 'threatens' woman he 'sexted' as wife vows to stick by him",
      "source_id": "metro",
      "published_at": "2017-02-25T10:42:06Z",
      "post_url": "http://localhost:4000/trending/20170225474564685778",
      "post_type": "top",
      "post_id": "20170225474564685778",
      "description": "Danny is currently on a break from the soap.",
      "author": "Katie Baillie"
    },
    {
      "url_to_image": "http://e3.365dm.com/17/02/1600x900/78a694ca49ca3f80c023065ca56cc89ee88f994461604e61e285610d79a9cacf_3897546.jpg?20170225105308",
      "title": "Ranieri arrives at Leicester to say goodbye",
      "source_id": "sky-news",
      "published_at": "2017-02-25T10:34:00Z",
      "post_url": "http://localhost:4000/trending/201702257612410676392",
      "post_type": "top",
      "post_id": "201702257612410676392",
      "description": "Sacked Leicester City manager Claudio Ranieri has arrived at the club's training ground to say goodbye to staff and players.",
      "author": " Anonymous"
    },
    {
      "url_to_image": "http://e3.365dm.com/17/02/1600x900/78a694ca49ca3f80c023065ca56cc89ee88f994461604e61e285610d79a9cacf_3897546.jpg?20170225105308",
      "title": "Sacked Ranieri bids final farewell to Leicester",
      "source_id": "sky-news",
      "published_at": "2017-02-25T10:34:00Z",
      "post_url": "http://localhost:4000/trending/20170225782527918526",
      "post_type": "top",
      "post_id": "20170225782527918526",
      "description": "Leicester City manager Claudio Ranieri has left the club's training ground for the last time after saying goodbye to players.",
      "author": " Anonymous"
    },
    {
      "url_to_image": "http://ichef.bbci.co.uk/news/1024/cpsprodpb/4F6B/production/_94813302_cannabis_factory.jpg",
      "title": "Three on slavery charges after nuclear bunker cannabis find",
      "source_id": "bbc-news",
      "published_at": "2017-02-25T10:33:02Z",
      "post_url": "http://localhost:4000/trending/201702257510102310146102",
      "post_type": "top",
      "post_id": "201702257510102310146102",
      "description": "Three men are to appear in court later following nuclear bunker cannabis discovery.",
      "author": "BBC News"
    },
    {
      "url_to_image": "https://si.wsj.net/public/resources/images/BN-SD976_2Xyxm_G_20170218103116.jpg",
      "title": "Suspect in Kim Jong Nam Killing Says Oil ‘Prank’ Earned Her $90",
      "source_id": "the-wall-street-journal",
      "published_at": "2017-02-25T10:32:00Z",
      "post_url": "http://localhost:4000/trending/201702255294868104526",
      "post_type": "top",
      "post_id": "201702255294868104526",
      "description": "An Indonesian suspect in the attack on Kim Jong Nam said she was paid $90 to help apply a baby oil-like liquid to his face, which police say contained a lethal nerve agent that killed the half brother of North Korea’s dictator.",
      "author": "Ben Otto and Anita Rachman"
    },
    {
      "url_to_image": "https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/ronald-koeman_1qul734ymyof71eymuz3zo7by1.jpg",
      "title": "Koeman hopes Southampton lose EFL Cup final to boost Everton's European hopes",
      "source_id": "four-four-two",
      "published_at": "2017-02-25T10:31:01Z",
      "post_url": "http://localhost:4000/trending/20170225286877814368",
      "post_type": "top",
      "post_id": "20170225286877814368",
      "description": "Manchester United will have the support of Everton manager Ronald Koeman for Sunday's EFL Cup final against Southampton at Wembley.",
      "author": "FourFourTwo"
    },
    {
      "url_to_image": "http://talksport.com/sites/default/files/field/image/201702/zlatan_3.jpg",
      "title": "Zlatan Ibrahimovic to quit Manchester United THIS SUMMER? Veteran striker said to be stalling on extending Old Trafford deal",
      "source_id": "talksport",
      "published_at": "2017-02-25T10:31:00Z",
      "post_url": "http://localhost:4000/trending/20170225854579552719",
      "post_type": "top",
      "post_id": "20170225854579552719",
      "description": "Zlatan Ibrahimovic is reportedly stalling on a new Manchester United contract. The veteran striker has been a revelation for United since arriving on a free transfer from Paris Saint-Germain in the summer. The 35-year-old has struck 24 goals in 37 appearances to make a mockery of those who doubted whether he would make an impact in English football.",
      "author": "talkSPORT"
    },
    {
      "url_to_image": "http://www.thehindu.com/news/national/other-states/article17366483.ece/ALTERNATES/LANDSCAPE_615/SAVENLEVELSOFPOLICEBARRIERS",
      "title": "American Centre attack suspect arrested in Gaya",
      "source_id": "the-hindu",
      "published_at": "2017-02-25T10:24:54Z",
      "post_url": "http://localhost:4000/trending/2017022513107181867910",
      "post_type": "top",
      "post_id": "2017022513107181867910",
      "description": "A suspect in the 2002 terror attack on American Centre in Kolkata was arrested from Bihar’s Gaya district, police said on Sunday.A team of Gujarat Anti-Terrorist Squad, Jharkhand Police and Bihar Poli",
      "author": "PTI"
    },
    {
      "url_to_image": "http://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/13E10/production/_94842418_lizzy_yarnold_getty1.jpg",
      "title": "Lizzy Yarnold wins Skeleton World Championships bronze",
      "source_id": "bbc-sport",
      "published_at": "2017-02-25T10:23:37Z",
      "post_url": "http://localhost:4000/trending/20170225187265655192",
      "post_type": "top",
      "post_id": "20170225187265655192",
      "description": "British Olympic champion Lizzy Yarnold holds her nerve to finish third at the Skeleton World Championships in Germany.",
      "author": "BBC Sport"
    },
    {
      "url_to_image": "http://ichef.bbci.co.uk/news/1024/cpsprodpb/76E9/production/_92914403_deisel.jpg",
      "title": "Car buyers should have 'long, hard think' about diesel",
      "source_id": "bbc-news",
      "published_at": "2017-02-25T10:20:42Z",
      "post_url": "http://localhost:4000/trending/201702251079710410741102",
      "post_type": "top",
      "post_id": "201702251079710410741102",
      "description": "The transport secretary suggests drivers should try to buy the least polluting vehicles possible.",
      "author": "BBC News"
    },
    {
      "url_to_image": "https://i.guim.co.uk/img/media/00cbb739871fba7e861baa1e196d09718acc65eb/0_148_4644_2786/master/4644.jpg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly91cGxvYWRzLmd1aW0uY28udWsvMjAxNi8wNS8yNS9vdmVybGF5LWxvZ28tMTIwMC05MF9vcHQucG5n&s=f42ffefe04bba8a225977e9268d8d8b9",
      "title": "Trump press ban: BBC, CNN and Guardian denied access to briefing",
      "source_id": "the-guardian-au",
      "published_at": "2017-02-25T10:19:46Z",
      "post_url": "http://localhost:4000/trending/201702251082285735224",
      "post_type": "top",
      "post_id": "201702251082285735224",
      "description": "The Guardian, New York Times, CNN and more were barred from ‘gaggle’ hours after Trump once again called much of the media an ‘enemy of American people’",
      "author": "Sabrina Siddiqui"
    },
    {
      "url_to_image": "https://i.guim.co.uk/img/media/049fdf3490316254b3076bcb087c59bb5d98545e/35_0_3465_2079/master/3465.jpg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly91cGxvYWRzLmd1aW0uY28udWsvMjAxNi8wNS8yNS9vdmVybGF5LWxvZ28tMTIwMC05MF9vcHQucG5n&s=729423a46402acc5a206a86b46409721",
      "title": "David Miliband: Labour's move to the left is a mistake",
      "source_id": "the-guardian-uk",
      "published_at": "2017-02-25T10:15:59Z",
      "post_url": "http://localhost:4000/trending/201702254515261101344",
      "post_type": "top",
      "post_id": "201702254515261101344",
      "description": "Former foreign secretary says party is further from power than at any time in last 50 years because of lack of substance",
      "author": "Damien Gayle"
    },
    {
      "url_to_image": "https://metrouk2.files.wordpress.com/2017/02/cats1.jpg?quality=80&strip=all&w=1200&h=630&crop=1",
      "title": "Long-lost cat brothers reunited when their owners fell in love on Tinder",
      "source_id": "metro",
      "published_at": "2017-02-25T10:15:27Z",
      "post_url": "http://localhost:4000/trending/201702255227631037195",
      "post_type": "top",
      "post_id": "201702255227631037195",
      "description": "Cathleen had promised her daughter that she'd find their kitten's twin brother. She did - and found her soulmate in the process.",
      "author": "https://www.facebook.com/ellenscottjournalist"
    },
    {
      "url_to_image": "http://newsimg.bbc.co.uk/media/images/67165000/jpg/_67165916_67165915.jpg",
      "title": "FA People’s Cup: First round",
      "source_id": "bbc-sport",
      "published_at": "2017-02-25T10:13:44Z",
      "post_url": "http://localhost:4000/trending/201702251014784573319",
      "post_type": "top",
      "post_id": "201702251014784573319",
      "description": "Follow live text commentary from across day two of the first round of the FA People’s Cup.",
      "author": "BBC Sport"
    },
    {
      "url_to_image": "http://s4.reutersmedia.net/resources/r/?m=02&d=20170225&t=2&i=1174012505&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED1O05X",
      "title": "Iraqi forces push deeper into western Mosul as civilians flee",
      "source_id": "reuters",
      "published_at": "2017-02-25T10:13:34Z",
      "post_url": "http://localhost:4000/trending/201702253185799610299",
      "post_type": "top",
      "post_id": "201702253185799610299",
      "description": "U.S.-backed Iraqi forces pushed deeper into western Mosul on Saturday after retaking the city's airport from Islamic State and punching into built-up areas of the jihadists' last major stronghold in the country.",
      "author": "Isabel Coles"
    },
    {
      "url_to_image": "http://i1.wp.com/metrouk2.files.wordpress.com/2017/02/ad_236392055.jpg?crop=0px%2C205px%2C2500px%2C1314px&resize=1200%2C630&quality=80&strip=all&ssl=1",
      "title": "White House bans major news outlets from critical press briefing",
      "source_id": "metro",
      "published_at": "2017-02-25T10:09:32Z",
      "post_url": "http://localhost:4000/trending/2017022556410945691089",
      "post_type": "top",
      "post_id": "2017022556410945691089",
      "description": "Donald Trump called the media 'the enemy of the people'",
      "author": "https://www.facebook.com/ashithanagesh"
    }
  ]
			});
});



module.exports = router;
