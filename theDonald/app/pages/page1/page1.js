import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  constructor() {
        this.title;
        this.posts;

        this.viewDidLoad();
    }

    viewDidLoad() {
        this.title = 'Latest Trumpisms';

        this.posts = [
            {
                imageUrl: "https://pbs.twimg.com/profile_images/705464735353991168/d4eBpkKr.jpg",
                quote: "Can we get people to vote to get rid of New Jersey? They don't talk about how it was beautiful. It is a great question. This is a movement.",
                userName: "The Donald"
            },
            {
                imageUrl: "http://static.boredpanda.com/blog/wp-content/uploads/2015/07/donald-trump-funny-look-alike-20__700.jpg",
                quote: "Can we get people to vote to get rid of New Jersey? They don't talk about how it was beautiful. It is a great question. This is a movement.",
                userName: "The Donald"
            },
            {
                imageUrl: "http://www.fullredneck.com/wp-content/uploads/2016/03/Funny-Donald-Trump-Jokes.jpg",
                quote: "Can we get people to vote to get rid of New Jersey? They don't talk about how it was beautiful. It is a great question. This is a movement.",
                userName: "The Donald"
            },
            {
                imageUrl: "http://i.imgur.com/uHCfuzi.jpg",
                quote: "Can we get people to vote to get rid of New Jersey? They don't talk about how it was beautiful. It is a great question. This is a movement.",
                userName: "The Donald"
            },
            {
                imageUrl: "https://static01.nyt.com/images/2015/10/01/fashion/01MELANIA/01MELANIA-master675.jpg",
                quote: "He is honest person!",
                userName: "Trophy Wifey Trump"
            },
            {
                imageUrl: "https://pbs.twimg.com/profile_images/705464735353991168/d4eBpkKr.jpg",
                quote: "Can we get people to vote to get rid of New Jersey? They don't talk about how it was beautiful. It is a great question. This is a movement.",
                userName: "The Donald"
            },
            {
                imageUrl: "https://pbs.twimg.com/profile_images/705464735353991168/d4eBpkKr.jpg",
                quote: "Can we get people to vote to get rid of New Jersey? They don't talk about how it was beautiful. It is a great question. This is a movement.",
                userName: "The Donald"
            }
        ];
    }
}
