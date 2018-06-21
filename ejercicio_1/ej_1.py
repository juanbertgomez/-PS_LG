items = raw_input("Por favor ingrese los numeros sperados por espacio: ").split()

def number_type(number):
    result = sum([k for k in range(1,number) if number % k == 0])
    classe = result - number
    
    if classe == 0:
        return 'Perfecto'
    elif classe > 0:
        return 'Abundante'
    else:
        return 'Defectivo'

classification = {}
for i in items:
    i = int(i)
    classification[i] = number_type(i)

print (classification)