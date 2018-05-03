var = int(raw_input("Por favor ingrese un numero: "))

result = sum([k for k in range(1,var) if var % k == 0])
classe = result - var

if classe == 0:
    print ('Perfecto')
elif classe > 0:
    print ('Abundante')
else:
    print ('Defectivo')
