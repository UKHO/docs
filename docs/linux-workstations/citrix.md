# Installing Citrix Receiver on Linux

In order to access the UKHO Citrix desktop, your computer needs to have Citrix Receiver installed.  On Windows, this is a straightforward, automatic process.  On Linux, it may require a manual install and some configuration. If you get this error:



## Download and install Citrix Receiver

- Open a browser and navigate to the [Receiver for Linux download page](https://www.citrix.com/en-gb/downloads/citrix-receiver/linux/receiver-for-linux-latest.html)
- Navigate to the bottom of the page and download the relevant option from Debian Packages or RedHat packages. Both Web client and Full client seem to work
- Use your package manager (apyt/yum/dnf) to install the downloaded package
- In the instructions below, the install location is referred to as $CITRIX_HOME.  Normally this will be /opt/Citrix/ICAClient but YMMV

## Configure certificates

For some reason, Citrix Receiver for Linux does not work out of the box on Linux.  This appears to be down to not shipping with the correct certificates.  The steps below describe how to correct this for Ubuntu and other distros. Be warned, however, that the instructions for all distros require access to a working Ubuntu install.

### Ubuntu

These instructions were taken from [from this AskUbuntu post](https://askubuntu.com/questions/901448/citrix-receiver-error-1000119)

In short, telling Citrix Receiver to use the default CA certificates that ship with Ubuntu works just fine.

```sh
cd $CITRIX_HOME/keystore
sudo mv cacerts cacerts.original
sudo ln -s /etc/ssl/certs cacerts
cd ../util
sudo ./ctx_rehash
```

### Fedora 


