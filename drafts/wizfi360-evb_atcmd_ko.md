# WizFi360 AT Command를 이용하여 WIZnet Cloud에 연동

## Introduction

WIZnet Cloud에 WizFi360-EVB를 등록하여 디바이스를 관리하고, Dashboard에서 전송된 데이터 모니터링을 할 수 있습니다.

디바이스가 WIZnet Cloud에 연결되는 과정은 다음과 같습니다.

1. 디바이스 WiFi 연결 설정
2. 인증 서버에서 인증서 다운로드
3. 인증서를 사용하여 WIZnet Cloud에 연결
4. 데이터 전송 및 모니터링



## 필수 구성 요소

먼저 다음 항목들이 준비되어야 합니다.

### Hardware
 - Desktop or Laptop Computer
 - [WizFi360-EVB-Shield](https://wizwiki.net/wiki/doku.php/products:wizfi360:start)
 - Micro 5 Pin USB Cable

<img src="https://github.com/Wiznet/azure-iot-kr/blob/master/images/mqtt_atcmd_wizfi360_required_item_1.png" />

### Software
 - Serial Terminal (TeraTerm, Hercules, YAT, etc.)

>본 문서에서는 YAT를 기준으로 설명합니다.



## Step 1: Device Setting

### 1. Hardware 준비

WizFi360-EVB-Shield는 **Standalone Mode**로 사용됩니다. 따라서 WizFi360-EVB-Shield의 DIP Switch는 다음과 같이 설정되어 있어야 합니다.

* SW1 : On
* SW2 : Off
* SW3 : Off

<img src="https://github.com/Wiznet/azure-iot-kr/blob/master/images/set_wizfi360_evb_shield_dip_sw_1.png" />



### 2. Device 연결

Hardware 설정 후, Micro 5 Pin USB Cable을 이용하여 WizFi360-EVB-Shield를 Desktop 혹은 Laptop Computer와 연결합니다.

**장치 관리자**에서 WizFi360-EVB-Shield와 연결된 **COM Port**를 확인 할 수 있습니다.

<img src="https://github.com/Wiznet/azure-iot-kr/blob/master/images/device_management_1.png" />

> 장치 관리자에서 COM Port를 확인 할 수 없는 경우, 다음 Link에서 Driver를 Downlonad하여 설치합니다.
>
> * [CP210x USB to UART Bridge VCP Drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)


### 3. Terminal 프로그램 연결

터미널 프로그램을 실행하고, 장치관리자에서 확인한 Com port 번호로 포트를 열어 준비합니다.

통신 속도(Baudrate)는 `115200 bps`로 설정합니다.

<!-- 캡쳐 -->


## Step 2: 디바이스 설정

### 1. WiFi 접속 설정

초기 부팅 시 디바이스는 AP 모드로 동작하며, 터미널에서는 다음과 같은 메시지가 출력됩니다.

<!-- 초기 부팅 메시지 화면 -->


```
AP Mode web server config mode
```


스마트폰 또는 WiFi 어댑터가 포함된 PC에서 WiFi를 켜고 `WizFi360_xxxxxx` 형태의 SSID를 찾아 연결한 다음, Web browser를 실행하고 `192.168.36.1` 주소로 접속합니다.

>xxxxxx는 디바이스 맥 주소의 끝 6자리입니다.


<!-- 스마트폰 캡쳐 화면 -->

웹 페이지에서 디바이스가 연결될 AP 공유기 정보(SSID, Password)를 입력하고 설정을 저장합니다.

디바이스는 설정 정보에 따라 Station Mode로 AP에 접속합니다.

이 때 터미널에서는 다음과 같은 메시지가 출력됩니다.

```
AP Mode web server config mode<CR><LF>
+STA_CONNECTED:"6a:9c:07:63:9e:ca"<CR><LF>
smartconfig type:Web<CR><LF>
Smart get wifi info<CR><LF>
ssid:<AP SSID><CR><LF>
password:<AP password><CR><LF>
smartconfig connected wifi<CR><LF>
```


네트워크에 연결되면 디바이스는 곧바로 WIZnet Cloud 인증 서버를 통해 인증을 시도합니다. 

>등록된 장치가 아니면 인증서를 받을 수 없습니다. 이 경우 관리자에게 문의해 주세요.


### 2. 디바이스 연결 확인

장치가 인증 서버로부터 인증서를 받아 성공적으로 WIZnet Cloud 서버에 연결되면 다음과 같은 메시지가 출력됩니다.

<!-- 캡쳐 화면 -->

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

이제 아래 링크를 참조하여 Dashboard 사이트에서 장치를 등록합니다.




## Step 3. Data 전송 및 확인

AT 커맨드를 사용하여 데이터를 전송할 수 있습니다.

* `AT+WINC_PUB_EVENT`


파라미터는 JSON 형태여야 합니다.

>Key 값은 클라우드에서 장치 등록시 사용한 컴포넌트 이름을 따라야 합니다.
>컴포넌트 이름은 Dashboard 사이트 내 장치 세부 정보 페이지에서 확인할 수 있습니다. 


<!-- 설명 문서 링크 -->


아래 예시는 디바이스에 설정된 컴포넌트 이름이 `Float`, `Dec`인 경우입니다.


| Command                                       | Response            |
| :-------------------------------------------- | :------------------ |
| AT+WINC_PUB_EVENT={"Float": 24.36, "Dec": 64} | + WINC_PUB_EVENT:OK |
|                                               | WINCPUB:OK          |


Dashboard 사이트에 접속하여 데이터 수신을 확인합니다.




# 더 보기

<!-- 대시보드 위젯 등록 등 관련 문서 링크 -->



