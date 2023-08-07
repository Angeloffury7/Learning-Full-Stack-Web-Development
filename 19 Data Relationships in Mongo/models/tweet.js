const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
    .connect("mongodb://127.0.0.1/TweetsDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((m) => console.log("Connected to MongoDB"))
    .catch((e) => console.log("Connection Error"));

const userSchema = new Schema({
    username: String,
    age: Number,
});

const tweetsSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetsSchema);

const makeTweets = async () => {
    // const user = new User({
    //     username: "chickenfan99",
    //     age: 51,
    // });

    const user = await User.findOne({ username: "chickenfan99" });

    const tweet1 = new Tweet({
        text: "OMG I LOVE MY CHICKEN FAMILY",
        likes: 0,
    });

    // tweet1.save();
    // user.save();

    const tweet2 = new Tweet({
        text: "bock bock bock my chickens make noises",
        likes: 12983,
    });

    tweet2.user = user;
    tweet2.save();
};

// makeTweets();

//Populating user
const findTweet = async () => {
    // const tweet = await Tweet.findOne({}).populate("user", "username");
    const tweet = await Tweet.find({}).populate("user","-_id"); //excludes id
    console.log(tweet);
};

findTweet();