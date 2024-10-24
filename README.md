# SiemensS7-nodeJs-modbus-TCPIP-2

![Modbus2](https://github.com/user-attachments/assets/6643af6e-1daf-451e-8e66-9202b120a044)

PLC instance in PLCSIM Advanced to simulate a Siemens 1500 PLC:
![image](https://github.com/user-attachments/assets/480f59c0-8b23-4e54-adf0-55a0884fca15)


![Image1](https://github.com/user-attachments/assets/7a17e817-cbea-4c8b-b9a9-91b030b3383b)
In modbus communication the holding registers are from 40001 to 49999.
The client writes value 17 into holding register 40002 that is the first element in the Boxes array.
Boxes[0] = Holding register 40001

Boxes[1] = Holding register 40002

Boxes[2] = Holding register 40003

Boxes[3] = Holding register 40004

![Image2](https://github.com/user-attachments/assets/a8da4496-4239-4725-ae14-cf3f2376fba0)
The client reads the content of two holding registers beginning with the first register so in this case reads register 40001 and 40002.

![Image3](https://github.com/user-attachments/assets/323649c5-9828-4aed-96f8-92965759d95f)
Coils 00001 - 00008 = Q0.0 - Q0.7 or alternatively M0.0 - M0.7

Coils 00009 - 00016 = Q1.0 - Q1.7 or alternatively M1.0 - M1.7

![Image4](https://github.com/user-attachments/assets/a1a10a18-6b43-4bea-9537-9d42ca89f46f)
Client reads coils from Q0.0 to Q0.7 where Q0.0 is true and the others are false.




