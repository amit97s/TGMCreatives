require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

app.get("/videos", async (req, res) => {
  try {
    const { resources } = await cloudinary.search
      .expression("resource_type:video")
      .sort_by("created_at", "desc")
      .max_results(100) // Fetch more if needed
      .execute();

    // Group videos by folder
    const groupedVideos = {};
    
    resources.forEach((video) => {
      const folderName = video.folder || "Uncategorized"; // Get folder name
      if (!groupedVideos[folderName]) {
        groupedVideos[folderName] = [];
      }
      groupedVideos[folderName].push(video.secure_url);
    });

    // Shuffle videos in each category
    Object.keys(groupedVideos).forEach(folder => {
      groupedVideos[folder] = shuffleArray(groupedVideos[folder]);
    });

    res.json(groupedVideos); // Send grouped videos
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
