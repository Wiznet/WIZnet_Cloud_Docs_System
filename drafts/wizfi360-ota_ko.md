---
slug: /wizfi360-ota
title: WizFi360 Firmware OTA
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl'

WizFi360-WIZnetCloud 펌웨어가 아닌 스탠다드 펌웨어를 사용하고 있다면, 먼저 펌웨어 업데이트를 해야 합니다.

OTA(Over The Air) 기능을 사용하여 네트워크를 통해 무선 업데이트를 진행할 수 있습니다. 

>현재 사용중인 Firmware 정보를 확인하려면, `AT+GMR` 커맨드를 사용합니다.


## WizFi360 OTA

다음 순서로 OTA를 수행할 수 있습니다.

1. Station 모드 변경
2. AP에 접속 (네트워크 연결)
3. OTA

>사용되는 AT command에 대한 세부 정보는 [가이드 문서: WizFi360 AT Instruction Set](http://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360_atset_v107.2k.pdf)에서 확인할 수 있습니다.



### 1) Station 모드 변경

`AT+CWMODE_CUR=1`

```
ready<CR><LF>

AT+CWMODE_CUR=1<CR><LF>
AT+CWMODE_CUR=1<CR><LF>
<CR><LF>
OK<CR><LF>
```

### 2) AP 접속 설정

`AT+CWJAP_CUR=<ssid>,<pwd>`

```
AT+CWJAP_CUR="rena","wiznet00"<CR><LF>
AT+CWJAP_CUR="rena","wiznet00"<CR><LF>
WIFI CONNECTED<CR><LF>
WIFI GOT IP<CR><LF>
<CR><LF>
OK<CR><LF>
```


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