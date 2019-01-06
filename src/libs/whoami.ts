import os = require('os');

const rp = require('request-promise-native');

const ucfirst = (str) => {
  str += "";
  let f = str.charAt(0)
      .toUpperCase();
  return f + str.substr(1);
};

interface iProcessMetadata {
  env: Object,
  ipAddressPrivate: string,
  ipAddressPublic: string,
  os: string,
  username: string,
  hostname: string
}

const getPublicIPAddress = async (): Promise<string> => {
  return rp('http://api.ipify.org')
      .catch((err) => {
        console.log(err);
        console.log('Unable to get public ip address for this server');
      });
};

const getLocalIPAddress = (): string => {
  let myIPAddress: string = null;
  const netInterfaces = os.networkInterfaces();
  Object.keys(netInterfaces).forEach(function (ifname) {
    netInterfaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
      myIPAddress = iface.address;
    });
  });
  return myIPAddress;
};

const getOS = (): string => {
  let retVar = 'Linux'; //default operating system
  if (process.env.name) retVar = ucfirst(process.env.name);
  if (process.env.OS) retVar = ucfirst(process.env.OS);
  return retVar;
};

const getUsername = (): string => {
  return process.env.USER || process.env.USERNAME;
};

const getHostname = (): string => {
  return ucfirst(process.env.COMPUTERNAME) || os.hostname();
};

export const getProcessMetadata = async (): Promise<iProcessMetadata> => {
  const ipAddressPublic = await getPublicIPAddress();
  const ipAddressPrivate = getLocalIPAddress();
  return {
    env: process.env,
    ipAddressPrivate,
    ipAddressPublic,
    os: getOS(),
    username: getUsername(),
    hostname: getHostname() || ipAddressPrivate,
  }
};

