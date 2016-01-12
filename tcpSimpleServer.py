import socket

UDP_IP = '127.0.0.1';
UDP_PORT = 8088;

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM);
sock.bind((UDP_IP, UDP_PORT));
sock.listen(1);

pipefile = open("/tmp/pipe0","r");

while True:
	client, addr = sock.accept();
	while True:
		data = pipefile.read();
		client.send(data);

	client.close();
