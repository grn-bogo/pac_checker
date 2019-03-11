function FindProxyForURL(url, host) {

    var clientIP = myIpAddress();
    if (isInNet(clientIP, "10.46.0.0", "255.255.0.0")) {
        if (isResolvable("resolvable.example.net")) {
            return "DIRECT";
        }
    }

    return "PROXY 112.35.10.15:1712;DIRECT";
}