# Installing Tracker on Different OS

## 1. Windows

1. Go to the official Tracker download page: [https://physlets.org/tracker/](https://physlets.org/tracker/)
2. Click on **“Windows Installer”** (usually `.exe` file).
3. Download the installer and run it.
4. Follow the installation wizard:

    * Accept the license agreement
    * Choose installation location
    * Click **Install**
5. After installation, open Tracker from the Start Menu or desktop shortcut.

---

## 2. macOS

1. Visit [https://physlets.org/tracker/](https://physlets.org/tracker/)
2. Click on **“macOS Installer”** (`.dmg` file).
3. Open the downloaded `.dmg` file.
4. Drag the Tracker icon into the **Applications** folder.
5. Launch Tracker from **Applications**.

    * If macOS blocks it (security settings), go to **System Preferences → Security & Privacy → General → Open Anyway**.

---

## 3. Linux

Tracker is available as a **.deb** package for Debian/Ubuntu-based systems or can be installed via **snap**.

### Method 1: Using Debian/Ubuntu `.deb` package

1. Download the `.deb` file from [Tracker download page](https://physlets.org/tracker/).
2. Open Terminal and navigate to the download folder.
3. Install Tracker using:

   ```bash
   sudo dpkg -i tracker-x.x.x.deb
   sudo apt-get install -f   # to fix any missing dependencies
   ```
4. Launch Tracker from your application menu.

### Method 2: Using Snap (Ubuntu or other Snap-supported Linux)

```bash
sudo snap install tracker --classic
```

---

## ✅ Additional Tips

* Ensure you have **Java installed**, as Tracker runs on Java.
* Keep Tracker updated to the latest version for best performance.
* For **troubleshooting**, check the [Tracker FAQ](https://physlets.org/tracker/faq.html).

