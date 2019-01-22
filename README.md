# **Raspberry Pi WiFi Attacker**
## Turn your Raspberry Pi into a WiFi attacking device.

## Note: this application is made for academic purposes only!!! Some elements of this application are illegal for non-academic use!

This is an application for attacking WiFi networks using Raspberry Pi (RPI) 3. This application includes the attacker script and web application used as an UI for running the attacks.

## What you will need (Hardware):
- A raspberry Pi with a built in wireless network card (for example, Raspberry Pi 3B)
- A USB WiFi card
- SD card (with min. 16 GB of memory)

## What you will need (Software on Raspberry Pi):
- [Raspbian OS](https://www.raspberrypi.org/downloads/)
- [Python](https://www.python.org/) & [Scapy](https://scapy.readthedocs.io/en/latest/index.html) (Both should come preinstalled on Raspbian OS)
- [NPM & NodeJS](https://www.instructables.com/id/Install-Nodejs-and-Npm-on-Raspberry-Pi/)
- [Generate new SSH key and add it to your GitHub account](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux)
- [RaspAP](https://github.com/billz/raspap-webgui) (Installation notes are on link, see [Quick Installer](https://github.com/billz/raspap-webgui#quick-installer) section)

## How to download and run Raspberry Pi WiFi Attacker
- Clone the repository
```Bash
git clone https://github.com/jseric/raspberry-jammer.git
```

- Install dependencies for server-side and client side
```Bash
cd raspberry-jammer
cd server
npm install
cd client
npm install
```

- Run application
```Bash
sudo npm run dev # In raspberry-jammer/server directory
```
