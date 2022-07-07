
def fib(n):
    if n < 2:
        return n
    return fib(n-2) + fib(n-1)
    
def fibToString():
    return ''.join('Fibonacci for {0}: {1}\n'.format(n, fib(n)) for n in range(20))

print(fibToString())
    