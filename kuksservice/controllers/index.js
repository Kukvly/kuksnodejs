const axios = require('axios');

// Token test router
exports.test = async (req, res, next) => {
    try{
        // If session didn't have tokens, it try to issue tokens.
        if(!req.session.jwt){
            const tokenResult = await axios.post('http://localhost:8091/v1/token', {
                clientSecret: process.env.CLIENT_SECRET,
            });
            // Token issue success
            if(tokenResult.data?.code === 200) {
                // token saves at session
                req.session.jwt = tokenResult.data.token;
            } else { // Token issue failure
                // issue failure reason response
                return res.json(tokenResult.data);
            }
        }

        // issued token test
        const result = await axios.get('http://localhost:8091/v1/token', {
            headers: { authorization: req.session.jwt },
        });
        return res.json(result.data);
    } catch (error) {
        console.error(error);
        if(error.response?.status === 419) {
            return res.json(error.response.data);
        }
        return next(error);
    }
};