const { default: mongoose } = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1/relationshipDemo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((m) => console.log("Connected to MongoDB"))
    .catch((e) => console.log("Connection Error"));

const UserSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        //Our userObject has an _id, but why does our address have an ID as well?
        //Mongo treats this object like another schema
        //You can have an addressSchema and embed that in here.
        {
            _id: { _id: false }, //turning that new _id off
            street: String,
            city: String,
            state: String,
            country: String,
        },
    ],
});

const User = new mongoose.model("User", UserSchema);

const makeUser = async () => {
    const u = new User({
        first: "Harry",
        last: "Potter",
    });

    u.addresses.push({
        street: "123 Sesame St.",
        city: "New York",
        state: "NY",
        country: "USA",
    });

    const res = await u.save();
    console.log(res);
};

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: "99 3rd St.",
        city: "New York",
        state: "NY",
        country: "USA",
    });

    const res = await user.save();
    console.log(res);
};

addAddress("64cfd7c13369ec99a45ffe48");