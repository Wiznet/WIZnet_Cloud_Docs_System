---
slug: /devices/wizfi360-ota
title: WIZnet Cloud Firmware OTA
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl'

If you using `Standard WizFi360 Firmware`, need to update to `WIZnet Cloud WizFi360 Firmware`.

Using OTA(Over the air), you can update firmware through WiFi.

>To check current firmware information, use `AT+GMR` command.


## WizFi360 OTA

OTA process like below.

1. Change WiFi to station mode
2. Connect to AP
3. OTA

>For more information about WizFi360 AT command, refer to [Guide: WizFi360 AT Instruction Set](http://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360_atset_v107.2k.pdf).



### 1) Change WiFi to station mode 

`AT+CWMODE_CUR=1`

```
ready<CR><LF>

AT+CWMODE_CUR=1<CR><LF>
AT+CWMODE_CUR=1<CR><LF>
<CR><LF>
OK<CR><LF>
```

### 2) Connect to AP

`AT+CWJAP_CUR=<ssid>,<pwd>`

```
AT+CWJAP_CUR="<ssid>","<pwd>"<CR><LF>
AT+CWJAP_CUR="<ssid>","<pwd>"<CR><LF>
WIFI CONNECTED<CR><LF>
WIFI GOT IP<CR><LF>
<CR><LF>
OK<CR><LF>
```

<img alt="wizfi360_connect" src={useBaseUrl('/img/device/wizfi360_connect.png')} />

### 3) OTA

`AT+CIUPDATE=<Fireware image url>`

>현재 아래 URL에서 WIZnet Cloud 연동 WizFi360 F/W를 제공합니다.
* URL: "http://wizwiki.net/download/WizFi360/WinC/WizFi360_SDK_WINC_V1.0.0.7.img"


```
AT+CIUPDATE="http://wizwiki.net/download/WizFi36
AT+CIUPDATE="http://wizwiki.net/download/WizFi36
0/WinC/WizFi360_SDK_WINC_V1.0.0.7.img"<CR><LF>
0/WinC/WizFi360_SDK_WINC_V1.0.0.7.img"<CR><LF>
+CIPUPDATE:1<CR><LF>
+CIPUPDATE:2<CR><LF>
+CIPUPDATE:3<CR><LF>
+CIPUPDATE:4<CR><LF>
?
<CR><LF>
ready<CR><LF>
AP Mode web server config mode<CR><LF>
```

<img alt="wizfi360_ota" src={useBaseUrl('/img/device/wizfi360_ota.png')} />


## Next Step

* [Connect to WIZnet Cloud Using WizFi360-EVB](/wizfi360-evb)