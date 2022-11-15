const bcrypt = require("bcrypt");

const User = require("./models/User");

class DatabaseManager {
    static async fetchUser(username) {
        return new Promise(async (resolve, _) => {
            const user = User.findOne({ username: username });
            resolve({
                username: user.username,
                email: user.email
            });
        });
    }

    static async insertUser(username, email, password) {
        return new Promise(async (resolve, _) => {
            // username checks
            if (!/^[a-z0-9]+$/i.test(username)) resolve({
                success: false,
                error: {
                    field: "username",
                    message: "Your username must only contain alphanumeric characters."
                }
            });

            if (username.length < 5) resolve({
                success: false,
                error: {
                    field: "username",
                    message: "Your username must be at least 5 characters long."
                }
            });

            const result = await User.findOne({ username: username });
            if (result) resolve({
                success: false,
                error: {
                    field: "username",
                    message: "That username is already taken."
                }
            });

            // password checks
            if (password.length < 6) resolve({
                success: false,
                error: {
                    field: "password",
                    message: "Your password must be at least 6 characters long."
                }
            });
            
            // hash password and insert user into database
            bcrypt.genSalt(10, async (err, salt) => {
                if (err) reject(err);
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) reject(err);

                    const time = Math.floor(new Date().getTime() / 1000);
                    const user = {
                        username: username,
                        email: email,
                        password: hash,
                        time_created: time,
                        last_updated: time
                    };
                    const result = new User(user);
            
                    await result.save();
                    resolve({
                        success: true
                    });
                });
            });
        });
    }
}

module.exports = DatabaseManager;
