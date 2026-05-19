# 🥬 Sabji Suggester

An intelligent web application that identifies vegetables from images and suggests the best Indian sabji (vegetable curry) recipes to make from them!

## 🎯 Features

- **AI-Powered Vegetable Recognition**: Uses TensorFlow.js with MobileNet pre-trained model for accurate vegetable detection
- **Recipe Suggestions**: Get 3 best sabji recipe ideas for each vegetable with difficulty levels
- **Zero Server Setup**: 100% client-side processing - no backend or API keys needed
- **Beautiful UI**: Modern, responsive design that works on mobile, tablet, and desktop
- **Drag & Drop Support**: Easy image upload with drag-and-drop functionality
- **Fast Processing**: Get results in seconds using on-device ML

## 📋 Supported Vegetables

- Potato, Tomato, Onion, Spinach
- Broccoli, Cauliflower, Carrot, Peas
- Cucumber, Bell Pepper, Eggplant, Green Beans
- Pumpkin, Okra, Cabbage, Mushroom
- Zucchini, Radish, Beet
- And more!

## 🚀 How to Use

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Upload Image**: Click to upload or drag-drop a vegetable image
3. **Wait for Analysis**: The AI will analyze your image (takes 2-5 seconds)
4. **Get Recipes**: View the detected vegetable and 3 sabji recipe suggestions
5. **Try Another**: Click "Try Another Image" to upload a new photo

## 📦 Dependencies

- **TensorFlow.js** (v4.0.0) - Machine learning framework
- **ML5.js** (v0.12.0) - Simplified ML5 wrapper
- **MobileNet Model** - Pre-trained image classification model

All dependencies are loaded from CDN, so no installation is required!

## 🎓 How It Works

1. **Image Upload**: User selects or drags a vegetable image
2. **ML Classification**: MobileNet model analyzes the image and returns top predictions
3. **Vegetable Matching**: App matches the prediction to known vegetables in the database
4. **Recipe Suggestion**: Displays the best 3 sabji recipes for the identified vegetable

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **ML Framework**: TensorFlow.js + ML5.js
- **Model**: MobileNet (efficient for real-time inference)
- **Architecture**: Client-side only (no server required)

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Features Breakdown

### Image Upload
- Click to select files
- Drag & drop support
- Real-time preview
- File validation

### AI Recognition
- MobileNet model (1000+ object classes)
- Confidence scoring
- Real-time feedback

### Recipe Display
- Beautiful card layout
- Difficulty levels (Easy/Medium/Hard)
- Responsive grid

## ⚡ Performance

- **First Load**: 2-3 seconds (model download)
- **Image Analysis**: 1-3 seconds (CPU dependent)
- **Image Size**: Works with any size (auto-resized)
- **No Server Calls**: 100% client-side

## 🔐 Privacy

✅ Your images are **never** sent to any server
✅ All processing happens locally in your browser
✅ No data collection or tracking

## 🎯 Future Enhancements

- [ ] Add more vegetables (100+)
- [ ] Multi-language support
- [ ] Nutritional information
- [ ] Cooking instructions
- [ ] User ratings on recipes
- [ ] Export recipes as PDF

## 📝 License

MIT License - Feel free to use, modify, and distribute!

## 🙏 Credits

- **TensorFlow.js Team** - ML framework
- **ML5.js Contributors** - Simplified ML interface
- **Google MobileNet** - Pre-trained model

## 💡 Tips

1. Use clear, well-lit images for best results
2. Try multiple angles if first attempt doesn't work
3. Crop images to focus on the vegetable
4. Works best with single vegetables (not mixed images)

---

**Made with ❤️ for vegetable lovers!** 🥬🍛
