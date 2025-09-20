
# FiveM Loading Screen by Zyrex

This project is a modern and interactive loading screen for FiveM servers. It features a background video, music, and server information.

Discord - [https://discord.gg/3hc2WxywMh](https://discord.gg/3hc2WxywMh)

⚠️ **I DO NOT GIVE PERMISSION TO PRESENT/SELL THIS SCRIPT AS YOUR OWN!**

---

## Features

* **Background Video:** Option to set your own video to play in the background.
* **Background Music:** Automatic music playback with volume controls.
* **Interactive Controls:** Users can control the music and toggle information display using the keyboard.
* **Server Information:** Displays admin team members and the server logo.
* **Optimized Design:** Clean and modern look with smooth animations.
* **"First loading" Mode:** Ability to hide the entire UI and show only the background video.

---

## Installation

1. **Download the files:** Make sure you have all the files from this project.
2. **Upload to the server:** Copy the `loadingscreen_zyrex` folder into the `resources` folder on your FiveM server.
3. **Add to server.cfg:** Open your `server.cfg` file and add the following line:

   ```
   start loadingscreen_zyrex
   ```
4. **Restart the server:** Restart your FiveM server for the changes to take effect.

---

## Configuration

All files for modification can be found in the `html` folder.

* **Video:** To change the background video, replace the `video/intro.mp4` file with your own video. Make sure it is in `.mp4` format.
* **Music:** To change the music, replace the `audio/music.mp3` file with your own music. Make sure it is in `.mp3` format.
* **Logo:** To change the server logo, replace the `img/logo.png` file with your own logo.
* **Admin Team Members:**

  * To edit the members, open the `index.html` file.
  * Find the `<div class="sidebar">` section.
  * You can change the names, roles, and images (`img/edz1nk.png`, `img/daxmen.png`). For best results, use images with a transparent background in `.png` format.

---

## Controls

* `P` - Play / Pause music
* `⬆️` (Up Arrow) - Increase music volume
* `⬇️` (Down Arrow) - Decrease music volume
* `➡️` (Right Arrow) - Hide / Show info panels

---

## Preview
<img width="1920" height="1001" alt="sdsds" src="https://github.com/user-attachments/assets/09799cba-8a25-4dbe-b3bf-4b282913deb1" />

