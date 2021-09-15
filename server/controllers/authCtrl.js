import Users from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const authCtrl = {

    // REGISTER USER
    register: async (req, res) => {
        try {

            const {
                fullname,
                username,
                email,
                password
            } = req.body

            let newUserName = username.toLowerCase().replace(/ /g, '')

            const user_name = await Users.findOne({
                username: newUserName
            });
            if (user_name) return res.status(400).json({
                msg: "This username already exists."
            })

            const user_email = await Users.findOne({
                email
            });
            if (user_email) return res.status(400).json({
                msg: "This email already exists."
            })

            if (password.length < 6)
                return res.status(400).json({
                    msg: "Password must be at least 6 characters"
                })

            // generate new password
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);

            // create new user
            const newUser = new Users({
                fullname,
                username,
                email,
                password: passwordHash
            })

            const access_token = createAccessToken({ id: newUser._id })
            const refresh_token = createRefreshToken({ id: newUser._id })

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
            })

            // save to mongodb
            await newUser.save()

            res.json({
                msg: "Register Successful!",
                access_token,
                user: {
                    ...newUser._doc,
                    password: ''
                }
            })
        } catch (err) {
            return res.status(500).json({
                msg: err.message
            })
        }
    },

    // LOGIN ROUTE
    login: async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body

            const user = await Users.findOne({
                email
            });
            if (!user) return res.status(400).json({
                msg: "This email does not exist."
            })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({
                msg: "Password is incorrect."
            })

            const access_token = createAccessToken({ id: user._id })
            const refresh_token = createRefreshToken({ id: user._id })

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
            })

            res.json({
                msg: "Login Successful!",
                access_token,
                user: {
                    ...user._doc,
                    password: ''
                }
            })

        } catch (err) {
            return res.status(500).json({
                msg: err.message
            })
        }
    },

    // LOGOUT ROUTE
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', { path: '/api/refresh_token' })
            return res.json({ msg: 'Logout successful!' })
        } catch (error) {
            return res.status(500).json({ msg: err.message })
        }
    },

    // GENERATE TOKEN
    generateAccessToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if (!rf_token) return res.status(400).json({ msg: 'Please login now.' })

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async (err, result) => {
                if (err) return res.status(400).json({ msg: 'please login now.' })

                console.log(result)
                const user = await Users.findById(result.id).select("-password")

                if (!user) return res.status(400).json({ msg: 'This user does not exist' });

                const access_token = createAccessToken({ id: result.id })

                res.json({
                    access_token,
                    user
                })
            })
        } catch (err) {
                return res.status(500).json({msg: err.message})
        }
    }

}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' })
}



export default authCtrl