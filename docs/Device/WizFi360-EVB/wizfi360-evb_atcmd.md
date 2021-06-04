---
slug: /devices/wizfi360-evb-shield
title: WizFi360-EVB-Shield
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Introduction
WizFi360-EVB-Shield is the certified to WIZnet Cloud deivce and it is PnP(Plug and Play) IoT device. With WizFi360-EVB-Shield, user can send data to Dashboard and monitoring the data. Also user can control the device and send message to the device from Dashboard. The process of device connection to WIZnet Cloud Dashboard is as follows.

```
1) WiFi connection setup
2) Download the certificate from WIZnet Cloud
3) Connect to WIZnet Cloud
4) Data transmission and monitoring from Dashboard
```


## Materials
First, the following items should be prepared.

### Hardware
 - Desktop or Laptop Computer
 - [WizFi360-EVB-Shield](https://wizwiki.net/wiki/doku.php/products:wizfi360:start)
 - Micro 5 Pin USB Cable

<img alt="wizfi360-EVB-Shield" src={useBaseUrl('/img/device/wizfi360-evb-shield.png')} />

### Setup Serial Terminal Tool
 - Serial Terminal (TeraTerm, Hercules, YAT, etc.)

>This document is based on YAT. YAT is free licened program and it supports serial communication terminal.

[**YAT Download**](https://sourceforge.net/projects/y-a-terminal/)


## Step 1: Initial Settings

### 1. Check Hardware 

WizFi360-EVB-Shield is used in **Standalone Mode**. Therefore, the DIP Switch of WizFi360-EVB-Shield should be set as follows.

* SW1 : On
* SW2 : Off
* SW3 : Off

<img alt="wizfi360-EVB-Shield-Setup" src={useBaseUrl('/img/device/wizfi360-evb-shield-setup.png')} />



### 2. Device connection
After Hardware configuration, Connect WizFi360-EVB-Shield to PC using Micro 5 Pin USB Cable. Then check `Com port number` of Connected Wizfi360-EVB-Shield in `Device Manager`.

> Windows Task-bar > Search > type `Device Manager` > Enter
>
> Or refer this link [how to access the Device Manager(Windows 10)](https://www.sony.co.uk/electronics/support/articles/00122116)

<img alt="device-manager" src={useBaseUrl('/img/device/device-manager.png')} />

> If you can't find device's `COM Port`, download and install driver from below link.
>
> * [CP210x USB to UART Bridge VCP Drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)


### 3. Open Terminal program

Execute `YAT`(or your ternial program) and open device's `COM Port` and baud rate as `115200 bps`.

<img alt="Termial-tool-setup" src={useBaseUrl('/img/device/yat-setup.png')} />

<!-- 설정 캡쳐? -->


## Step 2: Device Setup

### 1. WiFi Configuration

When device boot first, the device operates in `AP mode`, and the following message is output from the terminal.

<!-- 초기 부팅 메시지 화면 -->
<img alt="wizfi360_first_boot" src={useBaseUrl('/img/device/wizfi360_first_boot.png')} />

```
AP Mode web server config mode
```

Turn on the WiFi function on the smartphone or PC with the WiFi adapter, find the SSID in the form of `WizFi360_xxxxxx` and connect, then run the web browser and access the `192.168.36.1` address.

>`xxxxxx` mean the last 6 digits of the device MAC address.

>Smartconfig function does not support internet connection.


<!-- 스마트폰 캡쳐 화면 -->

<img alt="smartconfig_phone_1" src={useBaseUrl('/img/device/smartconfig_phone_1.png')} />


On the web page, enter the AP router information (SSID, Password) to which the device will be connected and save the settings.

<img alt="smartconfig_phone_2" src={useBaseUrl('/img/device/smartconfig_phone_2.png')} />

The device will connect to the AP in Station Mode according to the setting information.

At this time, the following message is output from the terminal.

```
AP Mode web server config mode<CR><LF>
+STA_CONNECTED:"<client mac address>"<CR><LF>
smartconfig type:Web<CR><LF>
Smart get wifi info<CR><LF>
ssid:<AP SSID><CR><LF>
password:<AP password><CR><LF>
smartconfig connected wifi<CR><LF>
```


When connected to the network, the device immediately tries to authenticate through the WIZnet Cloud authentication server.


>If it is not a registered device, cannot receive a certificate.

:::note Authentication Problem
If you can't finish authentication process, please contact the WIZnet Cloud support team.
:::



### 2. Check device connection

Once the device receives a certificate from the authentication server and successfully connects to the WIZnet Cloud server, the following message is output.

<!-- 캡쳐 화면 -->

<img alt="wizfi360_smartconfig_setup_log" src={useBaseUrl('/img/device/wizfi360_smartconfig_setup_log.png')} />

```
WIFI CONNECTED<CR><LF>
WIFI GOT IP<CR><LF>
GETTING_WINC_DEV_CERT<CR><LF>
WINC_CLI_CERTIFICATE:OK<CR><LF>
WINC_PRIVATE_KEY:OK<CR><LF>
WINC_CONNECTING<CR><LF>
WINC_CONNECT:OK<CR><LF>
WINC_DES_SUBSCRIBE:OK<CR><LF>
WINC_CMD_SUBSCRIBE:OK<CR><LF>
WINC_TWIN_SUBSCRIBE:OK<CR><LF>
WINC_PUB:OK<CR><LF>
TWIN_PUB:OK<CR><LF>
WINC_SUB_TWIN:$iothub/twin/res/200/?$rid=5865837 -> {"desired":{"firmware":{"fwVersionName":"wizfi360_SDK_WINC_V1.0.0.7.img","fwVersion":"1.0.0.7"},"$version":3},"reported":{"deviceStatus":{"FWVer":"9008","hostFWVer":"","isActivated":"true"},"UserProperty":{"UpMessage":"hello"},"$version":2}}<CR><LF>
```

Now refer to the link below to register your device on the Dashboard site.

- [How to register IoT devices](/how_to_register_IoT_devices)



## Step 3. Send data to cloud

You can transfer data using below AT command.

* `AT+WINC_PUB_EVENT`

The parameter must be in JSON format.

>Key value must follow the component name used when registering the device.

>Component names can be found on the Device Details page within the Dashboard site.

<!-- 설명 문서 링크 -->

The example below is when the component names set in the device are `Float`, `Dec`.


| Command                                       | Response            |
| :-------------------------------------------- | :------------------ |
| AT+WINC_PUB_EVENT={"Float": 24.36, "Dec": 64} | + WINC_PUB_EVENT:OK |
|                                               | WINCPUB:OK          |


Now go to the Dashboard site and check data.


## Next steps

- [Introduce of Dashboard](/introduce_of_dashboard)
- [How to register IoT devices](/how_to_register_IoT_devices)
- [Rule Engine](/rule_engine)




