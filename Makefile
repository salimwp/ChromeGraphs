all: simpleOutPipe

simpleOutPipe: simpleOutPipe.cpp 
	g++ -std=c++11 -o simpleOutPipe simpleOutPipe.cpp helper.cpp -lpthread
