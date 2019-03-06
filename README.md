# PAC Checker

PACK Checker is a command line tool for testing PAC files.
Basically its just a wrapper around pac-resolver lib's functionality

## Prerequisits

To run the pac_checker script you need to have node.js installed on your machine.

### Installing node on OSX

You need to have homebrew installed on your machine, if you don't have it run:

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

With brew installed run the following command from terminal to install node.js:

```sh
brew install node
``` 

To verify that the installation was successful run the following terminal command:

```sh
node --version
```

You should see the version of node currently installed on your system, for example:

```sh
BGriners-MacBook-Pro:~ bgriner$ node --version
v11.10.0
```

### Installing node on Windows 10

Download the Windows Installer from https://nodejs.org/en/download/ and run it.

To verify that the installation was successful run the following terminal command:
```sh
node --version
```

You should see the version of node currently installed on your system, for example:
```sh
C:\>node --version
v11.10.0
```

## Setup and installation

Extract the ZIP archive to a directory of your choosing.
In the terminal or cmd line go to script's directory and run the following command:
```sh
npm install
``` 
In the script's directory, run the following command to verify that installation was successful:
```sh
node pack_checker -h
```

## Usage

The script should be ran from its directory. Example runs below:


Example run without a mocked IP for one URLs

```sh
$ node pac_checker -p test_pac_ok_dnb.pac foo.com
myIpAddress() will return localhost IP
Running PAC file: test_pac.pac for url(s): https://foo.com
http://foo.com: PROXY 112.52.102.15:1712;DIRECT
```

Example run without a mocked IP for multiple URLs

```sh
$ node pac_checker -p test_pac_ok_dnb.pac http://foo.com/ http://xxx.com/ pornhub.com
myIpAddress() will return localhost IP
Running PAC file: test_pac.pac for url(s): http://foo.com/,http://xxx.com/,pornhub.com
http://xxx.com/: PROXY 112.35.102.15:1712;DIRECT
https://pornhub.com: PROXY 112.35.10.15:1712;DIRECT
http://foo.com/: PROXY 112.52.102.15:1712;DIRECT
```

Example run with a mocked IP for multiple URLs

```sh
$ node pac_checker -p test_pac_ok_dnb.pac -i 10.46.21.2 http://foo.com/ http://xxx.com/ pornhub.com
myIpAddress() will return 10.46.21.2
Running PAC file: test_pac_ok_dnb.pac for url(s): http://foo.com/,http://xxx.com/,pornhub.com
http://foo.com/: DIRECT
http://xxx.com/: DIRECT
https://pornhub.com: DIRECT

```

