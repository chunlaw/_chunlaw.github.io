%.o:	%.cpp
	$(CC) -c $< -o $@

calc:	calc.o Const.o
	$(CC) $^ -o $@
