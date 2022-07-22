---
title: My Typical Mac Setup
date: "2021-08-25"
description: I installed a fresh copy of macOS today. Why even bother doing this? In my case, I simply wanted to setup my Mac properly from the very beginning and learn some new things along the way.
---

I installed a fresh copy of macOS Big Sur today on my MacBook Pro. Why even bother doing this? In my case, I simply wanted to setup my Mac properly from the very beginning and learn some new things along the way.

After I learned how to build my own PC in middle school I have reinstalled windows many many times. I got very familiar with it and knew exactly how I liked to configure things. However, I got my first Mac in 2019 when I graduated high school and haven't bothered doing this, until now.

Since it was my first time on macOS, I suspect I made some mistakes that would not be considered "common practice". For example, I had no idea homebrew existed...

I don't think I will ever automate this process. I prefer making small changes and reminding myself of everything I do each time I start fresh.

### System Preferences

Not much is changed. If not specified, I leave it default.

**iCloud Settings**

- Everything on except Mail.

**iCloud Drive Settings**

- Everything on except Desktop and Documents Folders

**General**

- Dark appearance
- Turn "ask to keep changes when closing documents" on
- Set recent items to "none"
- Disable handoff between devices

**Dock**

- Remove everything from dock except:
  - Finder, Safari, Mail, Calendar, Music, System Preferences, Discord, iTerm2, Downloads, Trash
- Keep dock size relatively small
- Minimize windows using the "Scale effect"
- Disable showing recent applications in dock
- Enable dock auto hiding
- Show indicators for open apps

![My dock setup](https://i.imgur.com/lUOqEkb.png)

**Menu Bar**

- Magnet (window management app)
- Wifi
- Bluetooth
- Battery (with percentage)
- Control Center
- Date

Tip - Move icons around by holding CMD while dragging

![My menu bar setup](https://i.imgur.com/UfxgEP2.png)

**Spotlight**

- Uncheck everything except:
  - Applications, Calculator, Definition, System Preferences

**Touch ID**

- Disable Touch ID for Password Autofill (this is my personal preference but might not be the _best_ idea)

**Accessibility**

- Turn shake mouse pointer to locate off

**Trackpad**

- Disable natural scrolling direction

**Sharing**

- Change computer name to something better
- Make sure everything is unchecked. (unless you need them)

### Finder Settings

**General**

- Uncheck all items to show on desktop
- Set "New Finder windows show" to home folder
- Enable show all filename extensions
- Set all folders to use the list viewing mode

**Sidebar**

- Uncheck everything except:
  - Applications, Desktop, Documents, Downloads, Home Folder, iCloud Drive
- Create a "Projects" folder and add to sidebar

![My Finder setup](https://i.imgur.com/VGNCSeN.png)

### Install Tools + Apps

Start this process by installing homebrew

Install [iTerm2](https://iterm2.com)

`brew install --cask iterm2`

Install [Discord](https://discord.com)
`brew install --cask discord`

Install [VS Code](https://code.visualstudio.com)
`brew install --cask visual-studio-code`

Install [Brave](https://brave.com)
`brew install --cask brave-browser`

Install [Git](https://git-scm.com)
`brew install git`

Install [Node](https://nodejs.org/en/)
`brew install node`

Install [Neofetch](https://github.com/dylanaraps/neofetch)
`brew install neofetch`

Install [Xcode](https://developer.apple.com/xcode/)
`On the App Store`

Install [Magnet](https://magnet.crowdcafe.com)
`On the App Store`

Install [Affinity Designer](https://affinity.serif.com/en-us/designer/)
`On the App Store`

Install [Affinity Photo](https://affinity.serif.com/en-us/photo/)
`On the App Store`

Install [Fig](https://fig.io)
`Early Access on Website`

### Configuration

**iTerm2**

- Import favorite theme. Browse them [here](https://iterm2colorschemes.com).
- Increase font size to 14.
- Hide login message using touch .hushlogin

**VS Code**

- Install favorite theme
- Enable auto format on save
- Install the following extensions:
  - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [C/C++ Support](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
  - [Remote SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
  - [VSCode Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

**Git Settings**

`git config --global user.name "Name Here"`
`git config --global user.email foo@gmail.com`

`git config --global init.defaultBranch main`
`git config --global core.editor "code -w"`

### Conclusion

This sums up my current preferences for setting up a fresh macOS install. I like to keep it simple. I still have lots to learn and this will most likely become more complex in the future. But for now this will do.

Here are some other great setup guides that are more involved:

- [SWYX New Mac Setup](https://www.swyx.io/new-mac-setup-2021/)
- [Tania Rascia's Setup](https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/?ck_subscriber_id=591519942)
- [macOS Setup Guide](http://sourabhbajaj.com/mac-setup/)
