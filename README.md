# GonggaClient
The Gongga blockchain welcomes global computer enthusiasts to participate in the decentralized bookkeeping, and any computer can be the data node of the Gongga platform. Install and run the Gongga Data Node client and start running to get the GGA Token reward. If you have a PC or server, you can download and run the Gongga Peer program and become one of the global data nodes of the Gongga blockchain.

# Using

You can [download the latest release](https://gongga.org/#peers) for your operating system or build it by yourself (as below).

# Installation

 Windows
 
   Normally after several minutes the GGA token will be sent to you account, If the GGA awarding is not start, it might because of some C++ environment is not fulfill, you can try run to this program to fix it: https://www.microsoft.com/zh-cn/download/details.aspx?id=48145  
 

# Config folder
The data folder for Gongga depends on your operating system:

- Windows %APPDATA%\GonggaPeer
- macOS ~/Library/Application\ Support/GonggaPeer

# Development

To run Gongga in development you need:

- Node.js v8.x (use the preferred installation method for your OS)

# Initialization 

Now you're ready to initialize Gongga for development:
```bash
$ git clone https://github.com/jimshanghai/GonggaClient.git
$ cd GonggaClient
$ npm install
$ npm start
```
### Note:

#### Dependencies: [win32](https://gongga.org/lib/win.zip) | [win64](https://gongga.org/lib/win64.zip) |   [mac](https://gongga.org/lib/mac.zip)

Please select the download package according to the system version, unzip it to GonggaClient/exe/ and execute npm start.

# Generate packages

Platform
To build binaries for specific platforms (default: all available) use the following flags:
```bash
$ npm run package:win      # win32
$ npm run package:win64    # win64
$ npm run package:max      # mac
```

### Note:
#### Dependencies: [win32](https://gongga.org/lib/win.zip) | [win64](https://gongga.org/lib/win64.zip) |   [mac](https://gongga.org/lib/mac.zip)

Please select the download package according to the generated system version, unzip it to GonggaClient/exe/ and execute generating package command.
