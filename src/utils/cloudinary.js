import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

// Configuring cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Uploading image to cloudinary and returning the URL of the uploaded image  and optimized image

const uploadImage = async (localFilePath) => {
    if (!localFilePath) return null;  // Ensure file path is provided

    try {
        // Upload image to Cloudinary and optimize in one step
        const uploadedImage = await cloudinary.uploader.upload(localFilePath, {
            public_id: `images/${Date.now()}`,  // Simplified public_id for consistency
            resource_type: 'auto',
        });

        // Generate the optimized image URL
        const optimizedImage = cloudinary.url(uploadedImage.public_id, {
            fetch_format: 'auto',  // Auto-format for optimal delivery
            quality: 'auto',  // Auto-quality for performance
        });

        // Delete the local file (no need to await if deletion is not critical)
        fs.unlinkSync(localFilePath);

        return { uploadedImage, optimizedImage };

    } catch (error) {
        console.error('Error uploading image:', error);
        return null;  // Return null if there was an error
    }
};



export default uploadImage;