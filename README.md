# SiemensS7-nodeJs-modbus-TCPIP-2

![Modbus2](https://github.com/user-attachments/assets/6643af6e-1daf-451e-8e66-9202b120a044)

PLC instance in PLCSIM Advanced to simulate a Siemens 1500 PLC:
![image](https://github.com/user-attachments/assets/480f59c0-8b23-4e54-adf0-55a0884fca15)


![Image1](https://github.com/user-attachments/assets/4f646b9f-85d1-4bb0-8666-a09f952e5465)
In modbus communication the holding registers are from 40001 to 49999.
The client writes value 17 into holding register 40002 that is the first element in the Boxes array.
Boxes[0] = Holding register 40001
Boxes[1] = Holding register 40002
Boxes[2] = Holding register 40003
Boxes[3] = Holding register 40004

![Image2](https://github.com/user-attachments/assets/361960bc-0b23-4461-869e-6a44b2f1ec9a)
The client reads the content of two holding registers beginning with the first register so in this case reads register 40001 and 40002.


