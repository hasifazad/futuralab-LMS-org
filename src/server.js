// node modules
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()



const connectDatabase = require('./configs/databaseConfig');
const OrganizationModel = require('./models/organizationModel');


// router level middlewares
app.use(express.json());
app.use(cors());



// Connect to MongoDB
connectDatabase()


app.get('/org', async (req, res) => {

    let { orgCode } = req.body

    try {


        if (!orgCode) {
            return res.status(400).json({
                message: 'Organization code is required'
            });
        }

        // Find the organization by organization code
        const organization = await OrganizationModel.findOne({ organization_code: orgCode });


        if (!organization) {
            return res.status(404).json({
                message: 'Organization not found'
            });
        }

        // Respond with the organization details
        return res.status(200).json({
            message: 'Organization found',
            organization
        });
    } catch (error) {
        console.error('Error finding organization:', error);
        return res.status(500).json({
            message: 'An error occurred while searching for the organization',
            error: error.message
        });
    }

})





// Connect to server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});